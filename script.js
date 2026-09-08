// =====================================================
//  SPACE PORTFOLIO - Le Quoc Bao
//  Interactive JavaScript
// =====================================================

// ── STARFIELD CANVAS ──────────────────────────────────
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const STAR_COUNT = 200;
const stars = Array.from({ length: STAR_COUNT }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5 + 0.3,
  alpha: Math.random(),
  speed: Math.random() * 0.3 + 0.05,
  twinkle: Math.random() * 0.02 + 0.005
}));

// Shooting stars
const shootingStars = [];
function spawnShooting() {
  shootingStars.push({
    x: Math.random() * canvas.width * 1.5,
    y: Math.random() * canvas.height * 0.5,
    len: Math.random() * 120 + 60,
    speed: Math.random() * 8 + 4,
    alpha: 1,
    life: 1
  });
  setTimeout(spawnShooting, Math.random() * 3000 + 1500);
}
spawnShooting();

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Regular stars
  stars.forEach(s => {
    s.alpha += s.twinkle;
    if (s.alpha > 1 || s.alpha < 0) s.twinkle *= -1;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${Math.abs(s.alpha)})`;
    ctx.fill();
  });

  // Shooting stars
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const ss = shootingStars[i];
    ss.x -= ss.speed;
    ss.y += ss.speed;
    ss.life -= 0.015;
    if (ss.life <= 0) { shootingStars.splice(i, 1); continue; }

    const grad = ctx.createLinearGradient(ss.x, ss.y, ss.x + ss.len, ss.y - ss.len);
    grad.addColorStop(0, `rgba(255,255,255,${ss.life})`);
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.beginPath();
    ctx.moveTo(ss.x, ss.y);
    ctx.lineTo(ss.x + ss.len, ss.y - ss.len);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  requestAnimationFrame(drawStars);
}
drawStars();

// ── TYPEWRITER EFFECT ─────────────────────────────────
function typewriter(el, text, speed = 80, cb) {
  el.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text[i++];
    if (i >= text.length) { clearInterval(timer); if (cb) cb(); }
  }, speed);
}

window.addEventListener('load', () => {
  setTimeout(() => {
    const nameEl = document.getElementById('typed-name');
    const roleEl = document.getElementById('typed-role');
    typewriter(nameEl, 'LÊ QUỐC BẢO', 100, () => {
      setTimeout(() => typewriter(roleEl, 'Fullstack Developer', 60), 300);
    });
  }, 400);
});

// ── NAVBAR ────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger (mobile)
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// ── SKILL CARDS ANIMATION ─────────────────────────────
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, idx) => {
    if (e.isIntersecting) {
      const card = e.target;
      const delay = parseInt(card.dataset.delay || 0);
      setTimeout(() => {
        card.classList.add('visible');
        const fill = card.querySelector('.skill-fill');
        if (fill) fill.style.width = fill.dataset.width + '%';
      }, delay);
      skillObserver.unobserve(card);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-card').forEach(c => skillObserver.observe(c));

// ── STAT COUNTER ANIMATION ────────────────────────────
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num').forEach(num => {
        const target = parseInt(num.dataset.target);
        let cur = 0;
        const step = Math.ceil(target / 30);
        const timer = setInterval(() => {
          cur = Math.min(cur + step, target);
          num.textContent = cur;
          if (cur >= target) clearInterval(timer);
        }, 40);
      });
      statObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
const aboutSection = document.getElementById('about');
if (aboutSection) statObserver.observe(aboutSection);

// ── PARALLAX PLANET ───────────────────────────────────
const planetWrap = document.querySelector('.planet-wrap');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (planetWrap && scrolled < window.innerHeight) {
    planetWrap.style.transform = `translateX(-50%) translateY(${scrolled * 0.3}px)`;
  }
});

// ── MOUSE PARALLAX STARS ──────────────────────────────
document.addEventListener('mousemove', (e) => {
  const mx = (e.clientX / window.innerWidth - 0.5) * 20;
  const my = (e.clientY / window.innerHeight - 0.5) * 10;
  if (canvas) {
    canvas.style.transform = `translate(${mx}px, ${my}px) scale(1.02)`;
  }
});

// ── SMOOTH SCROLL FOR ANCHOR LINKS ────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── CURSOR GLOW EFFECT ────────────────────────────────
const glow = document.createElement('div');
glow.style.cssText = `
  position: fixed; pointer-events: none; z-index: 9999;
  width: 300px; height: 300px; border-radius: 50%;
  background: radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%);
  transform: translate(-50%, -50%); transition: opacity .3s;
  top: 0; left: 0;
`;
document.body.appendChild(glow);
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// ── PROJECT CARD TILT ─────────────────────────────────
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ── MOBILE NAV STYLE ──────────────────────────────────
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 600px) {
    .nav-links.open {
      display: flex !important; flex-direction: column; gap: 1rem;
      position: fixed; top: 60px; left: 0; right: 0;
      background: rgba(4,3,15,0.97); padding: 2rem;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      z-index: 99; backdrop-filter: blur(20px);
    }
    .nav-links a { font-size: 1rem; }
  }
  .nav-links a.active { color: #fff; }
  .nav-links a.active::after { width: 100%; }
`;
document.head.appendChild(style);

console.log('%c🚀 LÊ QUỐC BẢO | FULLSTACK DEVELOPER', 'font-size: 14px; color: #a855f7; font-weight: bold;');
console.log('%c📧 lequocbaotxdh@gmail.com | 🐙 github.com/Bao2311', 'font-size: 11px; color: #67e8f9;');
