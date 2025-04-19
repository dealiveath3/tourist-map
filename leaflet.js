/* leaflet.js（簡易表示用。実際にはCDN利用推奨） */
L = {
  map: function(id) {
    return {
      setView: function(coords, zoom) {
        document.getElementById(id).innerHTML = '<p style="padding:1em;">地図を表示するには、CDNからのleaflet.jsを利用してください。</p>';
        return this;
      }
    };
  },
  tileLayer: function() { return { addTo: function() {} }; }
};
