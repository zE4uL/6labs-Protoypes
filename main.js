const fab = document.querySelector('.fab');

fab.addEventListener('click', () => {
  // Pulse feedback
  fab.style.transform = 'scale(0.95)';
  setTimeout(() => { fab.style.transform = ''; }, 120);

  // TODO: wire up to actual new-session action
  console.log('New session triggered');
});
