let selectedMaterials = [];

document.querySelectorAll('.material-button').forEach(button => {
  button.addEventListener('click', () => {
    const material = button.textContent;

    if (selectedMaterials.includes(material)) {
      selectedMaterials = selectedMaterials.filter(m => m !== material);
      button.classList.remove('selected');
    } else {
      selectedMaterials.push(material);
      button.classList.add('selected');
    }

    console.log("選択中の素材:", selectedMaterials);
  });
});
