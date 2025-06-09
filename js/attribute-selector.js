let selectedAttribute = null;

document.querySelectorAll('.attribute-button').forEach(button => {
  button.addEventListener('click', () => {
    // すべてのボタンを一度非選択に
    document.querySelectorAll('.attribute-button').forEach(btn => btn.classList.remove('selected'));
    
    // 自分を選択状態に
    button.classList.add('selected');
    selectedAttribute = button.textContent;

    console.log("選択された属性:", selectedAttribute);
  });
});
