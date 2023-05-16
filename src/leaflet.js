
var map = L.map('root').setView([14.315518579685076, 108.33959143366701], 12)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fetch(
    "https://data.opendevelopmentmekong.net/geoserver/ODMekong/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ODMekong%3Aa4eb41a4-d806-4d20-b8aa-4835055a94c8&outputFormat=application%2Fjson"
)
    .then((response) => response.json())
    .then((data) => {
        const geojsonLayer = L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                // Thêm popup cho từng feature
                layer.bindPopup(feature.properties.Name_EN);
            }
        });
        geojsonLayer.addTo(map);
    })
    .catch((error) => console.error(error));