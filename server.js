const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      scriptSrc: ["'self'", "https://www.youtube.com", "https://apis.google.com"],
      imgSrc: ["'self'", "data:", "https://i.ytimg.com", "https://*.googleusercontent.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"]
    }
  }
}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', [
  path.join(__dirname, 'views/pages'),
  path.join(__dirname, 'views')
]);

// Routes
app.use('/', require('./routes/pages'));
app.use('/dashboard', require('./routes/dashboard'));

// API endpoint for subscriber count (you'll need to implement the actual API call)
app.get('/api/subscribers', async (req, res) => {
  try {
    // This is a placeholder - you'll need to use YouTube API with your API key
    // For now, we'll return a static count
    res.json({ subscribers: 719, updatedAt: new Date().toISOString() });
  } catch (error) {
    console.error('Error fetching subscriber count:', error);
    res.status(500).json({ error: 'Failed to fetch subscriber count' });
  }
});

// Error handling
app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { title: 'Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
