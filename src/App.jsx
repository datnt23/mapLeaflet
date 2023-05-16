import "./App.css";
import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { center } from "@turf/turf";

function App() {
	const [data, setData] = useState([]);
	const [centerMap, setCenterMap] = useState({
		lat: 14.315518579685076,
		lng: 108.33959143366701,
	});
	const mapRef = useRef();
	const ZOOM = 12;
	useEffect(() => {
		fetch(
			"https://data.opendevelopmentmekong.net/geoserver/ODMekong/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ODMekong%3Aa4eb41a4-d806-4d20-b8aa-4835055a94c8&outputFormat=application%2Fjson"
		)
			.then((response) => response.json())
			.then((dataJson) => {
				setData(dataJson);
			})
			.catch((error) => console.error(error));
	}, []);
	useEffect(() => {
		if (mapRef.current) {
			mapRef.current.clearLayers(); // remove old data
			mapRef.current.addData(data); // might need to be geojson.features
		}
	}, [mapRef, data]);
	const onEachFeature = (feature, layer) => {
		layer.bindPopup(
			feature.properties.Name_VI +
				" Latitude: " +
				getCenter(feature)[1] +
				" Longitude: " +
				getCenter(feature)[0]
		);
		layer.on("click", (e) => {
			let arr = getCenter(feature);
			const { current = {} } = mapRef;
			const { leafletElement: map } = current;
			setCenterMap({ lat: arr[1], lng: arr[0] });
			map.flyTo(center);
		});
	};
	const getCenter = (find) => {
		const centerPoint = center(find);
		const [longitude, latitude] = centerPoint.geometry.coordinates;
		return [longitude, latitude];
	};
	return (
		<>
			<MapContainer center={centerMap} zoom={ZOOM} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{data && (
					<GeoJSON ref={mapRef} data={data} onEachFeature={onEachFeature} />
				)}
			</MapContainer>
		</>
	);
}

export default App;
