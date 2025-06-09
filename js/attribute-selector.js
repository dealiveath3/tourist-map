let selectedAttribute = null;

document.querySelectorAll('.attribute-button').forEach(button => {
  button.addEventListener('click', () => {
    // すべてのボタンを解除
    document.querySelectorAll('.attribute-button').forEach(b => b.classList.remove('selected'));
    
    // 自分を選択
    button.classList.add('selected');
    selectedAttribute = button.textContent;

    console.log("選択中の属性:", selectedAttribute);
  });
});
