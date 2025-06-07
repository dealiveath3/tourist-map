let selectedAttribute = null;

document.querySelectorAll('.attribute-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.attribute-button').forEach(b => b.classList.remove('selected'));
    selectedAttribute = button.textContent;
    button.classList.add('selected');
    console.log("選択中の属性:", selectedAttribute);
  });
});
