window.mobileMenuToggle = function mobileMenuToggle() {
  var menu = document.getElementById('mobile-menu');
  if (!menu) return;
  menu.classList.toggle('hidden');
  var hidden = menu.classList.contains('hidden');
  document.body.style.overflow = hidden ? '' : 'hidden';
};

window.toggleSubMenu = function toggleSubMenu(targetId) {
  var target = document.getElementById(targetId);
  if (!target) return;
  target.classList.toggle('hidden');
};

document.addEventListener('DOMContentLoaded', function domReady() {
  var yearTarget = document.getElementById('current-year');
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  var faqButtons = document.querySelectorAll('[data-faq-toggle]');
  Array.prototype.forEach.call(faqButtons, function register(btn) {
    btn.addEventListener('click', function handleFaqToggle() {
      var answerId = btn.getAttribute('data-faq-toggle');
      var answer = document.getElementById(answerId);
      if (!answer) return;
      answer.classList.toggle('hidden');
    });
  });
});
