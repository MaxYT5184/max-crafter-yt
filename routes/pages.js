const express = require('express');
const router = express.Router();
const axios = require('axios');

// Middleware to pass common data to all views
router.use((req, res, next) => {
  res.locals.channelName = "Max Crafter YT";
  res.locals.channelUrl = "https://youtube.com/@max-yt2025";
  res.locals.currentYear = new Date().getFullYear();
  next();
});

// Homepage
router.get('/', async (req, res) => {
  try {
    // In production, replace with actual YouTube API call
    const subscriberCount = 1250; // Placeholder
    
    res.render('home', {
      title: 'Home',
      subscriberCount,
      latestVideo: null // You can add latest video data here
    });
  } catch (error) {
    console.error(error);
    res.render('home', {
      title: 'Home',
      subscriberCount: 0
    });
  }
});

// About Me
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    aboutText: "Welcome to Max Crafter YT! I create amazing gaming content, tutorials, and entertaining videos. Join me on this creative journey!"
  });
});

// Contact
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact',
    socials: {
      youtube: 'https://youtube.com/@max-yt2025',
      twitter: '#',
      instagram: '#',
      discord: '#'
    }
  });
});

// History
router.get('/history', (req, res) => {
  res.render('history', {
    title: 'History',
    milestones: [
      { date: '2023', event: 'Channel Created' },
      { date: '2024', event: 'First 100 Subscribers' },
      { date: '2025', event: '1000 Subscribers Milestone' }
    ]
  });
});

// Merch Store (Coming Soon)
router.get('/merch', (req, res) => {
  res.render('merch', {
    title: 'Merch Store',
    comingSoon: true,
    launchYear: 2025
  });
});

// Support page
router.get('/support', (req, res) => {
  res.render('support', {
    title: 'Support Us',
    supportOptions: [
      { name: 'Subscribe', icon: 'youtube', description: 'Subscribe to our channel' },
      { name: 'Patreon', icon: 'heart', description: 'Become a patron' },
      { name: 'Buy Me a Coffee', icon: 'coffee', description: 'One-time support' },
      { name: 'Share', icon: 'share', description: 'Share our content' }
    ]
  });
});

module.exports = router;
