import { center } from "@turf/turf";
import axios from "axios";
import { useEffect, useRef } from "react";
import { Marker, GeoJSON, useMapEvents, Popup } from "react-leaflet";
import { useStore, actions } from "../store";
import "../App.css";
function LocationCenter() {
	const [state, dispatch] = useStore();
	const positionRef = useRef();
	const funcRef = useRef();
	const qhctRef = useRef();
	const dccbRef = useRef();

	const map = useMapEvents({
		click(event) {
			const { lat, lng } = event.latlng;
			postData(lat, lng);
			dispatch(
				actions.setMarkedPosition({
					latitude: lat,
					longitude: lng,
				})
			);
			map.flyTo({ lat, lng }, 18);
		},
	});
	const postData = async (lat, lng) => {
		try {
			dispatch(actions.setIsLoading(true));
			const response = await axios({
				method: "POST",
				url: "https://sqhkt-qlqh.tphcm.gov.vn/computing/930/api/v3.5/a-z/maqh/762",
				data: {
					Lat: lat,
					Lon: lng,
				},
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			});
			dispatch(actions.setShowInfo(true));
			dispatch(actions.setData(response.data));
			dispatch(actions.setDataLocation(JSON.parse(response.data.QHPK)));
			dispatch(actions.setIsLoading(false));
		} catch (error) {
			console.log(error);
		}
	};
	// axios.interceptors.request.use(
	// 	(request) => {
	// 		dispatch(actions.setIsLoading(true));
	// 		// console.log(request);
	// 		return request;
	// 	},
	// 	(err) => {
	// 		return Promise.reject(err);
	// 	}
	// );
	// axios.interceptors.response.use(
	// 	(response) => {
	// 		dispatch(actions.setIsLoading(false));
	// 		// console.log(response);
	// 		return response;
	// 	},
	// 	(err) => {
	// 		return Promise.reject(err);
	// 	}
	// );
	useEffect(() => {
		if (positionRef.current) {
			positionRef.current.clearLayers(); // remove old data
			positionRef.current.addData(state.dataLocation); // might need to be geojson.features
		}
	}, [positionRef, state.dataLocation]);
	useEffect(() => {
		if (funcRef.current) {
			funcRef.current.clearLayers(); // remove old data
			funcRef.current.addData(state.dataGeoJsonFunc); // might need to be geojson.features
		}
	}, [funcRef, state.dataGeoJsonFunc]);
	useEffect(() => {
		if (qhctRef.current) {
			qhctRef.current.clearLayers(); // remove old data
			qhctRef.current.addData(state.dataGeoJsonQHCT); // might need to be geojson.features
		}
	}, [qhctRef, state.dataGeoJsonQHCT]);
	useEffect(() => {
		if (dccbRef.current) {
			dccbRef.current.clearLayers(); // remove old data
			dccbRef.current.addData(state.dataGeoJsonDCCB); // might need to be geojson.features
		}
	}, [dccbRef, state.dataGeoJsonDCCB]);
	const handleGetColor = (feature) => {
		return {
			color: "rgb(" + feature.properties.rgbcolor + ")",
			fillColor: "rgb(" + feature.properties.rgbcolor + ")",
			fill: true,
			fillOpacity: 1,
		};
	};
	const handleCenterMap = (marker) => {
		return [getCenter(marker)[1], getCenter(marker)[0]];
	};
	const getCenter = (find) => {
		const centerPoint = center(find);
		const [longitude, latitude] = centerPoint.geometry.coordinates;
		return [longitude, latitude];
	};
	return (
		<>
			{state.dataLocation && (
				<>
					{state.dataLocation.map((marker, index) => (
						<Marker
							key={index}
							position={handleCenterMap(marker)}
							interactive={true}
							icon={L.divIcon({
								html: `
									<img src="src/img/marker.png" width="40" height="40"">
									<div class="number">${index}</div>
									</img>`,
								className: "leaflet-marker-icon",
							})}
						>
							<Popup>
								<span>{index}</span>
							</Popup>
						</Marker>
					))}
					<GeoJSON
						ref={positionRef}
						data={state.dataLocation}
						style={handleGetColor}
					/>
				</>
			)}
			{/* Layer of function information */}
			{state.dataGeoJsonFunc && (
				<GeoJSON
					ref={funcRef}
					data={state.dataGeoJsonFunc}
					style={{ color: "red" }}
				/>
			)}
			{/* Layer of Quy Hoach Chi Tiet */}
			{state.dataGeoJsonQHCT && (
				<GeoJSON
					ref={qhctRef}
					data={state.dataGeoJsonQHCT}
					style={{ color: "#FF334F" }}
				/>
			)}
			{/* Layer of Dieu Chinh Cuc Bo */}
			{state.dataGeoJsonDCCB && (
				<GeoJSON
					ref={dccbRef}
					data={state.dataGeoJsonDCCB}
					style={{ color: "#FF334F" }}
				/>
			)}
		</>
	);
}
export default LocationCenter;
