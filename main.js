// 地図を初期化して表示する
const map = L.map('map').setView([35.681236, 139.767125], 10); // 東京駅を中心にズーム10

// タイルレイヤーを追加（OpenStreetMap）
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);


// 表示する場所データ
const locations = [
  { name: '東京駅', lat: 35.681236, lng: 139.767125, level: '高', date: '2025/5/1' },
  { name: '横浜中華街', lat: 35.443707, lng: 139.638031, level: '中', date: '2025/5/3' },
  { name: '鎌倉大仏', lat: 35.316718, lng: 139.535560, level: '低', date: '2025/5/5' }
];

// 混雑レベルに応じた色を返す関数
function getColorByLevel(level) {
  if (level === '高') return 'red';
  if (level === '中') return 'orange';
  return 'green';
}

// 各地点をマップに表示
locations.forEach((loc) => {
  const marker = L.circleMarker([loc.lat, loc.lng], {
    radius: 10,
    fillColor: getColorByLevel(loc.level),
    color: '#000',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
  }).addTo(map);

  marker.bindPopup(`
    <b>${loc.name}</b><br>
    日付：${loc.date}<br>
    混雑レベル：${loc.level}
  `);
});
