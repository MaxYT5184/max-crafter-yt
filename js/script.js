// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Cookie Consent Banner
const consentBanner = document.getElementById('consentBanner');
const acceptCookies = document.getElementById('acceptCookies');
const declineCookies = document.getElementById('declineCookies');

// Check if user has already made a choice
if (!localStorage.getItem('cookieConsent')) {
    // Show banner after 1 second
    setTimeout(() => {
        if (consentBanner) {
            consentBanner.style.display = 'block';
        }
    }, 1000);
}

if (acceptCookies) {
    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        if (consentBanner) {
            consentBanner.style.display = 'none';
        }
        // You can add analytics or other cookie-related code here
        console.log('Cookies accepted');
    });
}

if (declineCookies) {
    declineCookies.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        if (consentBanner) {
            consentBanner.style.display = 'none';
        }
        console.log('Cookies declined');
    });
}

// Bell Notification Button
const bellBtn = document.getElementById('bellBtn');
if (bellBtn) {
    bellBtn.addEventListener('click', () => {
        alert('Make sure to click the bell icon on my YouTube channel to get notified about new videos!');
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // In a real implementation, you would send this data to a server
        // For now, we'll just show a success message
        alert(`Thanks for your message, ${name}! I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Notify Form for Merch
const notifyForm = document.getElementById('notifyForm');
if (notifyForm) {
    notifyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('notifyEmail').value;
        
        // In a real implementation, you would send this to a mailing list service
        alert(`Thanks! We'll notify you at ${email} when the merch store launches!`);
        
        // Reset form
        notifyForm.reset();
    });
}

// Countdown for Merch Store (set to launch Jan 1, 2024)
const countdown = () => {
    const launchDate = new Date('Jan 1, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = launchDate - now;
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Update countdown display
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    
    // If launch date has passed
    if (timeLeft < 0) {
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
        
        // Update message
        const merchMessage = document.querySelector('.merch-message');
        if (merchMessage) {
            merchMessage.textContent = 'The merch store is now live! Check it out!';
        }
    }
};

// Initialize countdown if on merch page
if (document.getElementById('countdown')) {
    countdown();
    // Update every second
    setInterval(countdown, 1000);
}

// Animate subscriber count
const subCount = document.getElementById('subCount');
if (subCount) {
    // Simple animation for the subscriber count
    let currentCount = 719;
    let targetCount = 719; // Starting count
    let increment = 1;
    
    // In a real implementation, you would fetch this from the YouTube API
    // For now, we'll simulate growth
    const updateSubCount = () => {
        // Random chance to increase (simulating new subscribers)
        if (Math.random() > 0.7 && currentCount < 730) {
            targetCount += 1;
        }
        
        // Animate to target count
        if (currentCount < targetCount) {
            currentCount += increment;
            subCount.textContent = currentCount;
        }
    };
    
    // Update every 5 seconds
    setInterval(updateSubCount, 5000);
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});
