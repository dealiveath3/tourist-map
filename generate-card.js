// generate-card.js
let selectedMaterial = null;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.material').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.material').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedMaterial = btn.textContent;
      console.log("選択された素材：", selectedMaterial);
    });
  });
});
