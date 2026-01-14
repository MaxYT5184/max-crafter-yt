module.exports = {
    // YouTube API Configuration
    youtube: {
        apiKey: process.env.YOUTUBE_API_KEY || '',
        channelId: 'UCKrBCY6Wy5CvqBCroZ3Heiw', // You'll need to get this
        channelUrl: 'https://youtube.com/@max-yt2025'
    },
    
    // Website Configuration
    site: {
        name: 'Max Crafter YT',
        description: 'Official website for Max Crafter YouTube channel',
        url: process.env.SITE_URL || 'http://localhost:3000',
        port: process.env.PORT || 3000
    },
    
    // Dashboard Configuration
    dashboard: {
        username: process.env.DASHBOARD_USERNAME || 'admin',
        password: process.env.DASHBOARD_PASSWORD || 'MaxCrafterYT@YT' // Change this!
    },
    
    // Support Options
    support: {
        patreon: '#',
        buymeacoffee: '#',
        paypal: '#'
    }
};
