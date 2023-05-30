import { actions, useStore } from "../store";
function InfoFunction() {
	const [state, dispatch] = useStore();
	const handleToggleShowInfoFunction = () => {
		dispatch(actions.setShowInfoFunction(false));
		dispatch(actions.setDataGeoJsonFunc([]));
	};
	const handleToggle = () => {
		dispatch(actions.setShowInfo(false));
		dispatch(actions.setShowInfoFunction(false));
		dispatch(actions.setDataGeoJsonFunc([]));
	};
	return (
		<>
			<div className="div-header-info">
				<button
					className="btn-back-info"
					onClick={handleToggleShowInfoFunction}
				>
					<img src="/src/img/back-icon-button.png" width={20} height={20} />
				</button>
				<h3 className="text-center-info">Thông tin thửa đất</h3>
				<button className="btn-close-info" onClick={handleToggle}>
					<img src="/src/img/close-icon-button.png" width={20} height={20} />
				</button>
			</div>
			<div
				style={{
					textAlign: "left",
					fontSize: 20,
					fontWeight: "bold",
				}}
			>
				Thông tin ô chức năng
			</div>
			<div className="div-box-info">
				<div className="section">
					<div className="row">
						<div className="col-6">Mã ô phố:</div>
						<div className="col-6">
							{state.dataInfoFunc.maopho || "Đang cập nhật..."}
						</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Chức năng:</div>
						<div className="col-6">
							{state.dataInfoFunc.chucnang || "Đang cập nhật..."}
						</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Dân số:</div>
						<div className="col-6">
							{state.dataInfoFunc.danso || "Đang cập nhật..."}
						</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Diện tích:</div>
						<div className="col-6">
							{parseFloat(state.dataInfoFunc.dientich).toFixed(2) ||
								"Đang cập nhật..."}
						</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Mật độ xây dựng:</div>
						<div className="col-6">
							{state.dataInfoFunc.matdo || "Đang cập nhật..."}
						</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Tầng cao:</div>
						<div className="col-6">
							{state.dataInfoFunc.tangcao || "Đang cập nhật..."}
						</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Hệ số sử dụng đất:</div>
						<div className="col-6">
							{state.dataInfoFunc.hesosdd || "Đang cập nhật..."}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default InfoFunction;
