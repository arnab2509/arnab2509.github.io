// Theme Toggle Functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Toggle the light-theme class
    body.classList.toggle('light-theme');
    
    // Update the theme toggle icon
    if (body.classList.contains('light-theme')) {
        themeToggle.textContent = '☀️';
        // Save theme preference
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = '🌙';
        // Save theme preference
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Calculate offset for fixed header
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add fade-in animation
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add staggered animation for skill tags
            if (entry.target.classList.contains('skill-category')) {
                const skillTags = entry.target.querySelectorAll('.skill-tag');
                skillTags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.style.opacity = '1';
                        tag.style.transform = 'translateY(0) scale(1)';
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Observe all cards and project cards for animation
    const elementsToAnimate = document.querySelectorAll('.card, .project-card, .timeline-item');
    
    elementsToAnimate.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Observe for intersection
        observer.observe(element);
    });
    
    // Special handling for skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(10px) scale(0.9)';
        tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});

// Navbar active link highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    const headerHeight = document.querySelector('header').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Add scroll event listener for navbar
window.addEventListener('scroll', updateActiveNav);

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Mobile menu toggle functionality (for future enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
}

// Drawer toggle for mobile navigation
function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
        drawer.classList.remove('open');
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
        if (menuBtn) menuBtn.classList.remove('drawer-open');
    } else {
        drawer.classList.add('open');
        backdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (menuBtn) menuBtn.classList.add('drawer-open');
    }
}

// Optional: Close drawer on resize to desktop
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const drawer = document.getElementById('drawer');
        const backdrop = document.getElementById('drawer-backdrop');
        if (drawer) drawer.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        document.body.style.overflow = '';
    }
});

// Add typing effect to hero subtitle and loop infinitely
function typeWriterLoop(element, texts, speed = 100, pause = 1200) {
    let textIndex = 0;
    let i = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        if (!isDeleting) {
            element.innerHTML = currentText.substring(0, i + 1);
            i++;
            if (i < currentText.length) {
                setTimeout(type, speed);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    setTimeout(type, speed);
                }, pause);
            }
        } else {
            element.innerHTML = currentText.substring(0, i - 1);
            i--;
            if (i > 0) {
                setTimeout(type, speed / 2);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, speed);
            }
        }
    }
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const subtitle = document.querySelector('.hero .subtitle');
    if (subtitle) {
        // You can add more roles here for cycling
        const subtitleTexts = [
            "Flutter Enthusiast<span style=\"color:#356cff;\">_</span>",
            "Data Analyst <span style=\"color:#356cff;\">_</span>",
            "Software Developer<span style=\"color:#356cff;\">_</span>"
        ];
        typeWriterLoop(subtitle, subtitleTexts, 80, 1200);
    }
});


// Form validation (if contact form is added later)
function validateContactForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.message || formData.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    return errors;
}

// Utility function for smooth scrolling to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

} 
// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const subtitle = document.querySelector('.hero .subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeWriter(subtitle, originalText, 80);  // Enable this line
    }
});
