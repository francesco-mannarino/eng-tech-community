/* ============================================================
   ENG Tech Community — Main JavaScript
   ============================================================ */

'use strict';

/* ── 1. Page Loader ─────────────────────────────────────────── */
(function initLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    // Small delay for the ring animation to be visible
    setTimeout(() => loader.classList.add('loaded'), 350);
  });
})();

/* ── 2. Navbar: scroll effect + active link ─────────────────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Scroll background blur
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Highlight current page link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = navbar.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (
      href === currentPage ||
      (currentPage === '' && href === 'index.html') ||
      (currentPage === 'index.html' && href === 'index.html')
    ) {
      link.classList.add('active');
    }
  });
})();

/* ── 3. Hamburger Menu ──────────────────────────────────────── */
(function initHamburger() {
  const btn   = document.querySelector('.hamburger');
  const menu  = document.querySelector('.nav-links');
  const overlay = document.getElementById('nav-overlay');
  if (!btn || !menu) return;

  const toggle = (open) => {
    btn.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (overlay) overlay.style.display = open ? 'block' : 'none';
    btn.setAttribute('aria-expanded', String(open));
  };

  btn.addEventListener('click', () => toggle(!btn.classList.contains('open')));

  // Close on overlay click
  if (overlay) overlay.addEventListener('click', () => toggle(false));

  // Close on nav link click (mobile)
  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => toggle(false))
  );

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && btn.classList.contains('open')) toggle(false);
  });
})();

/* ── 4. Intersection Observer — Scroll Reveal ───────────────── */
(function initScrollReveal() {
  const opts = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Once revealed, stop observing
        observer.unobserve(entry.target);
      }
    });
  }, opts);

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    observer.observe(el);
  });
})();

/* ── 5. Particle Canvas (Hero) ──────────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;

  const ctx    = canvas.getContext('2d');
  let W, H, particles;
  const PARTICLE_COUNT = 70;
  const PINK = '197, 27, 136';

  class Particle {
    constructor() { this.reset(true); }

    reset(initial = false) {
      this.x  = Math.random() * W;
      this.y  = initial ? Math.random() * H : H + 10;
      this.r  = Math.random() * 1.8 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.5 + 0.15);
      this.alpha = Math.random() * 0.5 + 0.15;
      this.life  = 0;
      this.maxLife = Math.random() * 300 + 200;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life++;
      const progress = this.life / this.maxLife;
      // Fade in/out
      this.alpha = progress < 0.2
        ? progress / 0.2 * 0.55
        : progress > 0.8
          ? (1 - progress) / 0.2 * 0.55
          : 0.55;
      if (this.life >= this.maxLife || this.y < -10) this.reset();
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${PINK}, ${this.alpha})`;
      ctx.fill();
    }
  }

  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };

  const init = () => {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
  };

  let raf;
  const loop = () => {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    raf = requestAnimationFrame(loop);
  };

  init();
  loop();

  // Handle resize with debounce
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(init, 200);
  });

  // Pause when page is hidden to save resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else loop();
  });
})();

/* ── 6. Typing Effect (Hero subtitle) ──────────────────────── */
(function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const text = el.dataset.text || el.textContent.trim();
  el.textContent = '';

  // Create cursor
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.setAttribute('aria-hidden', 'true');

  let i = 0;
  const type = () => {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      i++;
      setTimeout(type, 45);
    }
  };

  // Start typing after hero animations
  setTimeout(type, 1100);
})();

/* ── 7. Filter Buttons (Events page) ────────────────────────── */
(function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.event-card[data-category]');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
        // Reset animation
        if (match) {
          card.classList.remove('visible');
          void card.offsetWidth; // reflow trick
          card.classList.add('visible');
        }
      });
    });
  });
})();

/* ── 8. Counter Animation (Stats) ───────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const easeOutQuad = t => t * (2 - t);

  const animateCounter = (el) => {
    const target   = parseFloat(el.dataset.count);
    const suffix   = el.dataset.suffix || '';
    const duration = 1400;
    const start    = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = easeOutQuad(progress);
      const value    = target % 1 !== 0
        ? (eased * target).toFixed(1)
        : Math.round(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ── 9. Dark / Light Mode Toggle ────────────────────────────── */
(function initThemeToggle() {
  const btn      = document.getElementById('theme-toggle');
  const iconSun  = document.getElementById('theme-icon-sun');
  const iconMoon = document.getElementById('theme-icon-moon');
  if (!btn) return;

  const STORAGE_KEY = 'eng-theme';
  const LIGHT_CLASS = 'light-mode';

  const applyTheme = (isLight) => {
    document.body.classList.toggle(LIGHT_CLASS, isLight);
    if (iconSun)  iconSun.style.display  = isLight ? 'none'  : '';
    if (iconMoon) iconMoon.style.display = isLight ? ''      : 'none';
    btn.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  };

  // Read stored preference; fall back to light (default design)
  const stored = localStorage.getItem(STORAGE_KEY);
  const preferLight = stored !== 'dark';
  applyTheme(preferLight);

  btn.addEventListener('click', () => {
    const isNowLight = !document.body.classList.contains(LIGHT_CLASS);
    applyTheme(isNowLight);
    localStorage.setItem(STORAGE_KEY, isNowLight ? 'light' : 'dark');
  });
})();
