import { actions, useStore } from "../store";
function InfoDCCB() {
	const [state, dispatch] = useStore();
	const handleToggleShowInfoDCCB = () => {
		dispatch(actions.setShowInfoDCCB(false));
		dispatch(actions.setDataGeoJsonDCCB([]));
	};
	const handleToggle = () => {
		dispatch(actions.setShowInfo(false));
		dispatch(actions.setShowInfoDCCB(false));
		dispatch(actions.setDataGeoJsonDCCB([]));
	};
	return (
		<>
			<div className="div-header-info">
				<button className="btn-back-info" onClick={handleToggleShowInfoDCCB}>
					<img src="/src/img/back-icon-button.png" width={20} height={20} />
				</button>
				<h3 className="text-center-info">Điều chỉnh cục bộ</h3>
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
				Thông tin điều chỉnh cục bộ
			</div>
			<div className="div-box-info">
				<div className="section">
					<div className="row">
						<div className="col-6">Tên dự án:</div>
						<div className="col-6">{state.dataInfoDCCB.tendccb}</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Diện tích (ha):</div>
						<div className="col-6">
							{parseFloat(state.dataInfoDCCB.dientich).toFixed(2)}
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
						<div className="col-6">{state.dataInfoDCCB.coquanpd}</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Số quyết định:</div>
						<div className="col-6">{state.dataInfoDCCB.soqd}</div>
					</div>
				</div>
				<div className="section">
					<div className="row">
						<div className="col-6">Ngày duyệt:</div>
						<div className="col-6">{state.dataInfoDCCB.ngayduyet}</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default InfoDCCB;
