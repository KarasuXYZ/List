document.addEventListener('DOMContentLoaded', function () {
  const envelope = document.querySelector('.envelope');
  const letter = document.querySelector('.letter');
  const closeBtn = document.querySelector('.close');

  if (!envelope) return;

  function setOpen(open){
    envelope.classList.toggle('open', open);
    envelope.setAttribute('aria-expanded', !!open);
    if (letter) letter.setAttribute('aria-hidden', !open);
    // focus management: focus close button when opened
    if (open && closeBtn) closeBtn.focus();
    if (!open) envelope.focus();
  }

  envelope.addEventListener('click', function (e){
    // toggle open state
    const isOpen = envelope.classList.contains('open');
    setOpen(!isOpen);
  });

  // keyboard: Enter or Space toggles
  envelope.addEventListener('keydown', function (e){
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar'){
      e.preventDefault();
      setOpen(!envelope.classList.contains('open'));
    }
    if (e.key === 'Escape' && envelope.classList.contains('open')) {
      setOpen(false);
    }
  });

  if (closeBtn){
    closeBtn.addEventListener('click', function (e){
      e.stopPropagation();
      setOpen(false);
    });
  }

  // close when click outside letter but inside envelope (optional)
  document.addEventListener('click', function (e){
    if (!envelope.classList.contains('open')) return;
    if (!envelope.contains(e.target)) setOpen(false);
  });
});
