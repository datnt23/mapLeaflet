import { actions, useStore } from "../store";

function InfoQHCT() {
	const [state, dispatch] = useStore();
	const handleToggleShowInfoQHCT = () => {
		dispatch(actions.setShowInfoQHCT(false));
		dispatch(actions.setDataGeoJsonQHCT([]));
	};
	const handleToggle = () => {
		dispatch(actions.setShowInfo(false));
		dispatch(actions.setShowInfoQHCT(false));
		dispatch(actions.setDataGeoJsonQHCT([]));
	};
	return (
		<>
			<div className="div-header-info">
				<button className="btn-back-info" onClick={handleToggleShowInfoQHCT}>
					<img src="/src/img/back-icon-button.png" width={20} height={20} />
				</button>
				<h3 className="text-center-info">Quy hoạch chi tiết</h3>
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
				Thông tin dự án
			</div>
			<div className="div-box-info">
				<div className="section">
					<div className="row">
						<div className="col-6">Tên dự án:</div>
						<div className="col-6">{state.dataInfoQHCT.tenduan}</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Quận/Huyện:</div>
						<div className="col-6">TP.Thủ Đức</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Diện tích (ha):</div>
						<div className="col-6">
							{parseFloat(state.dataInfoQHCT.dientich).toFixed(2)}
						</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Trạng thái:</div>
						<div className="col-6">Đã duyệt</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Cơ quan phê duyệt:</div>
						<div className="col-6"></div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Số quyết định:</div>
						<div className="col-6">Đang cập nhật</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default InfoQHCT;
