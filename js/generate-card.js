function generateCard() {
  if (!selectedAttribute) {
    alert("属性を選んでください！");
    return;
  }
  if (selectedMaterials.length === 0) {
    alert("素材を選んでください！");
    return;
  }

  const phrase = `${selectedAttribute}属性の ${selectedMaterials.join("と")} を宿したトレカ`;
  document.getElementById('preview').innerHTML = `
    <h2>生成されたカード</h2>
    <p>${phrase}</p>
    <img src="https://picsum.photos/400/250?random=${Math.random()}" alt="Generated Card" />
  `;
}
