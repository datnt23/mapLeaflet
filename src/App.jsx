import { useRef } from "react";
import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import "./App.css";
import "leaflet/dist/leaflet.css";
import InfoFeature from "./components/InfoFeature";
import LocationCenter from "./components/LocationCenter";
import { actions, useStore } from "./store";

function App() {
	const [state, dispatch] = useStore();
	const centerRef = useRef();
	const ZOOM = 13;
	const handleToggle = () => {
		dispatch(actions.setShowInfo(!state.showInfo));
	};
	return (
		<div className="div-map">
			<MapContainer ref={centerRef} center={state.center} zoom={ZOOM}>
				<LayersControl position="bottomright">
					<LayersControl.BaseLayer checked name="OpenStreetMap">
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
					</LayersControl.BaseLayer>
					<LayersControl.BaseLayer name="Google Map">
						<TileLayer
							attribution="'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'"
							url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
						/>
					</LayersControl.BaseLayer>
				</LayersControl>
				<LayersControl position="bottomright">
					<LayersControl.BaseLayer
						checked={state.showQHPK}
						name="Phân khu sử dụng đất"
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://sqhkt-qlqh.tphcm.gov.vn/api/tiles/thuduc_qhpksdd/{z}/{x}/{y}"
						/>
					</LayersControl.BaseLayer>
					<LayersControl.BaseLayer checked={state.showQHSDD} name="Sử dụng đất">
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://sqhkt-qlqh.tphcm.gov.vn/api/tiles/thuduc_qhsdd/{z}/{x}/{y}"
						/>
					</LayersControl.BaseLayer>
					<LayersControl.BaseLayer
						checked={state.showKHSDD}
						name="Kế hoạch sử dụng đất"
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://sqhkt-qlqh.tphcm.gov.vn/api/tiles/thuduc_khsdd/{z}/{x}/{y}"
						/>
					</LayersControl.BaseLayer>
					<LayersControl.BaseLayer name="Ranh phân khu">
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://sqhkt-qlqh.tphcm.gov.vn/api/tiles_ranhqhpk/762_763_769/{z}/{x}/{y}"
						/>
					</LayersControl.BaseLayer>
				</LayersControl>
				<LocationCenter />
			</MapContainer>
			{!state.dataLocation.length ? (
				<></>
			) : (
				<>
					{state.showInfo ? (
						<InfoFeature />
					) : (
						<button className="btn-info" onClick={handleToggle}>
							<img
								src="/src/img/info-icon-button.png"
								width={20}
								height={20}
								style={{ margin: "2px 0" }}
							/>
						</button>
					)}
				</>
			)}
		</div>
	);
}

export default App;
