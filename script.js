
// small interactive behaviors
document.getElementById('navToggle')?.addEventListener('click', function(){
  const nav = document.querySelector('.nav');
  if(nav.style.display === 'flex') nav.style.display = 'none';
  else nav.style.display = 'flex';
});

// Register buttons (demo)
document.querySelectorAll('.btn-register').forEach(b=>{
  b.addEventListener('click', e=>{
    const cls = e.target.dataset.class;
    const ok = confirm('Daftar ' + cls + ' sekarang?');
    if(ok){
      alert('Terima kasih! Form pendaftaran demo telah disimpan (localStorage).');
      let regs = JSON.parse(localStorage.getItem('demo_regs') || '[]');
      regs.push({class: cls, at: new Date().toISOString()});
      localStorage.setItem('demo_regs', JSON.stringify(regs));
    }
  });
});

// Contact form demo
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Terima kasih, pesan Anda telah diterima (demo).');
  e.target.reset();
});
