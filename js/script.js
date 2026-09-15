function toggleTheme() {
  document.body.classList.toggle('dark');
  var isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
window.addEventListener('load', function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});
