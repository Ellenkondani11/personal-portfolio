document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initScrollReveal();
  initSkillBars();
  initMobileMenu();
  initInteractiveDemos();
});

function initTypingEffect() {
  const targets = [
    document.getElementById('typing-text'),
    document.getElementById('typing-text-demo')
  ].filter(Boolean);

  if (!targets.length) return;

  const roles = [
    'Computer Science Student',
    'Software Developer',
    'Multimedia Designer',
    'Technology Enthusiast'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];
    let displayText = '';

    if (isDeleting) {
      displayText = currentRole.substring(0, charIndex-1);
      charIndex--;
      typingSpeed = 50;
    } else {
      displayText = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    targets.forEach(el => {
      el.textContent = displayText;
    });

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-element');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

function initSkillBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  if (!progressBars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-target') || '0%';
        bar.style.width = targetWidth;

        const parent = bar.closest('.skill-item');
        if (parent) {
          const counter = parent.querySelector('.skill-percent');
          if (counter) {
            animateCounter(counter, parseInt(targetWidth, 10));
          }
        }
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  progressBars.forEach(bar => observer.observe(bar));
}

function animateCounter(element, target) {
  let current = 0;
  const duration = 1200;
  const stepTime = Math.abs(Math.floor(duration / target));

  const timer = setInterval(() => {
    current += 1;
    element.textContent = current + '%';
    if (current >= target) {
      clearInterval(timer);
    }
  }, stepTime);
}

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('mobile-open');
    }
  });
}

function initInteractiveDemos() {
  const triggerBtn = document.getElementById('btn-reanimate-skills');
  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      const bars = document.querySelectorAll('.progress-fill');
      bars.forEach(bar => {
        const target = bar.getAttribute('data-target') || '0%';
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = target;
        }, 150);
      });
    });
  }

  const speedButtons = document.querySelectorAll('[data-speed]');
  speedButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      speedButtons.forEach(b => b.classList.remove('btn-primary'));
      speedButtons.forEach(b => b.classList.add('btn-outline'));
      btn.classList.remove('btn-outline');
      btn.classList.add('btn-primary');
    });
  });

  const liveInput = document.getElementById('live-custom-text');
  const livePreview = document.getElementById('live-preview-box');
  if (liveInput && livePreview) {
    liveInput.addEventListener('input', (e) => {
      livePreview.textContent = e.target.value.trim() ? e.target.value : 'Type in the box above to see live typography transformation';
    });
  }
}
