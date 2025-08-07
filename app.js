// Smooth scroll functionality
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // Observe achievement items with staggered delay
  const achievementItems = document.querySelectorAll('.achievement-item');
  achievementItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
  });

  // Observe review cards with staggered delay
  const reviewCards = document.querySelectorAll('.review-card');
  reviewCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
  });

  // Set up the "Discover More" button click handler
  const discoverButton = document.querySelector('.hero__cta');
  if (discoverButton) {
    discoverButton.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToSection('about');
    });
  }

  // Add parallax effect to hero background on scroll (desktop only)
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero__background');
    
    if (heroBackground && window.innerWidth > 768) {
      const rate = scrolled * -0.5;
      heroBackground.style.transform = `translateY(${rate}px)`;
    }
    
    ticking = false;
  }
  
  function requestParallaxUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  // Add scroll listener for parallax effect
  if (window.innerWidth > 768) {
    window.addEventListener('scroll', requestParallaxUpdate);
  }

  // Add hover effects for buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Handle image loading with fade-in effect
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Set initial styles for loading effect
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease-in-out';
    
    // Handle successful image load
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    
    // Handle image load error
    img.addEventListener('error', function() {
      console.warn('Failed to load image:', this.src);
      this.style.opacity = '1'; // Show broken image placeholder
    });
    
    // If image is already loaded (from cache)
    if (img.complete) {
      img.style.opacity = '1';
    }
  });

  // Add smooth reveal animation for sections
  const sections = document.querySelectorAll('section');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  // Set up section reveal animations
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    sectionObserver.observe(section);
  });

  // Make hero section visible immediately
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
  }

  // Preload hero background image for better performance
  const heroBackground = new Image();
  heroBackground.src = 'https://images.unsplash.com/photo-1600180758890-118735de8ce8?auto=format&fit=crop&w=1350&q=80';
  heroBackground.onload = () => {
    console.log('Hero background image loaded successfully');
  };
  heroBackground.onerror = () => {
    console.warn('Failed to load hero background image');
  };

  // Preload about section image
  const aboutImage = new Image();
  aboutImage.src = 'https://pplx-res.cloudinary.com/image/upload/v1754573225/pplx_project_search_images/ea72d6d2cf9d9260781ddc91a29a95e19778a892.jpg';
  aboutImage.onload = () => {
    console.log('About section image loaded successfully');
  };
  aboutImage.onerror = () => {
    console.warn('Failed to load about section image');
  };
});

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
  // Disable parallax on mobile devices
  if (window.innerWidth <= 768) {
    const heroBackground = document.querySelector('.hero__background');
    if (heroBackground) {
      heroBackground.style.transform = 'translateY(0)';
    }
  }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const target = e.target;
    if (target.classList.contains('hero__cta')) {
      e.preventDefault();
      scrollToSection('about');
    }
  }
});

// Utility function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add smooth scrolling behavior for any internal links
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    scrollToSection(targetId);
  }
});