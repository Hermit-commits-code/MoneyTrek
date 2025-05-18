// Tab switching logic
const buttons = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.getAttribute('data-tab');
    sections.forEach(section => {
      section.style.display = section.id === tab ? 'block' : 'none';
    });
  });
});
