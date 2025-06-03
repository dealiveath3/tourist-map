let selectedMaterials = [];

document.querySelectorAll('.material-button').forEach(button => {
  button.addEventListener('click', () => {
    const material = button.textContent;

    if (selectedMaterials.includes(material)) {
      // 選択済みなら解除
      selectedMaterials = selectedMaterials.filter(m => m !== material);
      button.classList.remove('selected');
    } else {
      // 選択に追加
      selectedMaterials.push(material);
      button.classList.add('selected');
    }

    console.log("選択中の素材:", selectedMaterials);
  });
});
