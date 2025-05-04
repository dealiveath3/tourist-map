const map = L.map('map').setView([35.681236, 139.767125], 9);

// 地図のタイルレイヤー（OpenStreetMap）
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 混雑アイコンを返す関数
function getIconByLevel(level) {
  const iconUrl = {
    '高': 'img/icon-high.png',
    '中': 'img/icon-medium.png',
    '低': 'img/icon-low.png'
  }[level];

  return L.icon({
    iconUrl: iconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
}

// 観光地データ
const locations = [
  { name: '東京駅', lat: 35.681236, lng: 139.767125, level: '高', date: '2025/5/3' },
  { name: '横浜中華街', lat: 35.443707, lng: 139.638031, level: '中', date: '2025/5/4' },
  { name: '鎌倉大仏', lat: 35.316718, lng: 139.535560, level: '低', date: '2025/5/5' },
  { name: '浅草寺', lat: 35.714765, lng: 139.796655, level: '高', date: '2025/5/3' },
  { name: 'お台場', lat: 35.619688, lng: 139.778374, level: '中', date: '2025/5/4' },
  { name: '箱根温泉', lat: 35.232915, lng: 139.105555, level: '低', date: '2025/5/5' }
];

// ピンを地図に追加
locations.forEach(loc => {
  const marker = L.marker([loc.lat, loc.lng], {
    icon: getIconByLevel(loc.level)
  }).addTo(map);

  marker.bindPopup(`
    <strong>${loc.name}</strong><br>
    日付：${loc.date}<br>
    混雑レベル：${loc.level}
  `);
});
