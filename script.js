const obs = new IntersectionObserver(els => {
    els.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('visible');
        e.target.querySelectorAll('.section-title').forEach(t => t.classList.add('typed'));
        e.target.querySelectorAll('.skill-badge').forEach((b,i) => b.style.animationDelay = (i*0.08)+'s');
      }
    });
  }, {threshold:0.15});
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  const bar = document.getElementById('progress');
  window.addEventListener('scroll', () => {
    bar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
  });

  const bubble = document.getElementById('heroSpeech');
  if(bubble) requestAnimationFrame(() => bubble.classList.add('visible'));

  const container = document.getElementById('particles');
  const colors = ['#7c3aed','#06b6d4','#7f1d1d','#1a1aff'];
  for(let i=0;i<28;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const sz = Math.random()*4+2;
    p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${Math.random()*14+8}s;animation-delay:${Math.random()*8}s;`;
    container.appendChild(p);
  }

  // Email popup
  const overlay = document.getElementById('emailOverlay');
  document.getElementById('emailBtn').addEventListener('click', e => {
    e.preventDefault();
    overlay.style.display = 'flex';
  });
  document.getElementById('closePopup').addEventListener('click', () => overlay.style.display = 'none');
  overlay.addEventListener('click', e => { if(e.target === overlay) overlay.style.display = 'none'; });

  function copyEmail() {
    navigator.clipboard.writeText('info@belgiumcampus.ac.za').then(() => {
      const fb = document.getElementById('copyFeedback');
      const btn = document.getElementById('copyBtn');
      fb.style.opacity = '1';
      btn.textContent = 'Copied!';
      btn.style.background = 'linear-gradient(135deg,#06b6d4,#7c3aed)';
      setTimeout(() => {
        fb.style.opacity = '0';
        btn.textContent = 'Copy';
        btn.style.background = 'linear-gradient(135deg,#7c3aed,#1a1aff)';
      }, 2000);
    });
  }
