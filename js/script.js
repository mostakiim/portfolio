// Navigation toggle
        const menuBtn = document.getElementById('menu-btn');
        const navLinks = document.getElementById('nav-links');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Typing animation
        const typedTextSpan = document.getElementById('typed-text');
        const textArray = ["Python Full Stack Web Developer", "Frontend Developer", "Backend Developer"];
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 1500;
        let textArrayIndex = 0;
        let charIndex = 0;
        
        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }
        
        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 100);
            }
        }
        
        // Initialize typing effect on load
        document.addEventListener('DOMContentLoaded', function() {
            if (textArray.length) setTimeout(type, newTextDelay + 250);
        });
        
        // Animate skill bars on scroll
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(skillBar => {
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = width;
            });
        }
        
        // Initialize animation when skills section is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(document.querySelector('.skills'));
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });