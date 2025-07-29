// Handle Logout Button
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      alert('You have been logged out.');
    });
  }

  // OPTIONAL: Animate cards on page load
  const cards = document.querySelectorAll('.animate-on-load');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.remove('opacity-0', 'translate-y-4');
      card.classList.add('opacity-100', 'translate-y-0');
    }, 150 * i);
  });

  // OPTIONAL: Toggle sidebar on small screens
  const toggleSidebar = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');

  if (toggleSidebar && sidebar) {
    toggleSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  }
});
