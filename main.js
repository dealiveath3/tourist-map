const map = L.map('map').setView([35.681236, 139.767125], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
  { name: '東京駅', lat: 35.681236, lng: 139.767125, level: '高', date: '2025/5/1' },
  { name: '横浜中華街', lat: 35.443707, lng: 139.638031, level: '中', date: '2025/5/3' },
  { name: '鎌倉大仏', lat: 35.316718, lng: 139.535560, level: '低', date: '2025/5/5' }
];

function getColorByLevel(level) {
  if (level === '高') return 'red';
  if (level === '中') return 'orange';
  return 'green';
}

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
