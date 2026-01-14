// Live Subscriber Count Update
async function updateSubscriberCount() {
    try {
        const response = await fetch('/api/subscribers');
        const data = await response.json();
        
        const subCountElement = document.getElementById('subCount');
        if (subCountElement) {
            subCountElement.textContent = `${data.subscribers.toLocaleString()} Subscribers`;
            subCountElement.innerHTML += ' <i class="fas fa-broadcast-tower"></i>';
        }
        
        // Update every 5 minutes
        setTimeout(updateSubscriberCount, 300000);
    } catch (error) {
        console.error('Failed to update subscriber count:', error);
        setTimeout(updateSubscriberCount, 60000); // Retry after 1 minute
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Initialize subscriber count
    updateSubscriberCount();
    
    // Add animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.support-card, .dashboard-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// YouTube API Integration (you'll need to add your API key)
const YOUTUBE_API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Replace with your API key

async function getChannelStats() {
    if (!YOUTUBE_API_KEY || YOUTUBE_API_KEY === 'YOUR_YOUTUBE_API_KEY') {
        console.warn('Please add your YouTube API key');
        return null;
    }
    
    try {
        // This would make actual API calls to YouTube
        // You'll need to implement this based on your API key
        return null;
    } catch (error) {
        console.error('Error fetching YouTube stats:', error);
        return null;
    }
}
