import { actions, useStore } from "../store";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
function MainInfo() {
	const [state, dispatch] = useStore();
	const handleGetFuncInfo = (geometry, properties) => {
		dispatch(actions.setShowInfoFunction(true));
		dispatch(actions.setDataGeoJsonFunc(geometry));
		dispatch(actions.setDataInfoFunc(properties));
	};
	const handleToggle = () => {
		dispatch(actions.setShowInfo(false));
	};
	const handleGetDCCB = (dccb) => {
		let ten;
		dccb.forEach((a) => {
			ten = a.properties.tendccb;
		});
		return ten;
	};
	const handleGetQHCT = (qhct) => {
		let ten;
		qhct.forEach((a) => {
			ten = a.properties.tenduan;
		});
		return ten;
	};
	const handleGetQHPK = (qhpk) => {
		let ten;
		qhpk.forEach((a) => {
			ten = a.tendoan;
		});
		return ten;
	};
	const handleGetQHSDD = (qhsdd) => {
		let ten;
		qhsdd.forEach((a) => {
			ten = a.tendoan;
		});
		return ten;
	};
	const handleChangeArrayFunc = (obj, index) => {
		if (obj.properties.maquyuoc === "DGT") {
			return (
				<div
					className="div-box-info"
					key={index}
					style={{
						backgroundColor: "rgb(" + obj.properties.rgbcolor + ")",
						color: "white",
					}}
				>
					<div className="section">
						<div className="row">
							<div className="col-6">Số thứ tự:</div>
							<div className="col-6">{index}</div>
						</div>
					</div>
					<div className="section">
						<div className="row">
							<div className="col-6">Chức năng SDĐ:</div>
							<div className="col-6">{obj.properties.chucnang}</div>
						</div>
					</div>
					<div className="section">
						<div className="row">
							<div className="col-6">
								Diện tích (m<sup>2</sup>):
							</div>
							<div className="col-6">
								{parseFloat(obj.properties.dientich).toFixed(2)}
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<>
					<div
						className="div-box-info"
						key={index}
						style={{
							cursor: "pointer",
							backgroundColor: "rgb(" + obj.properties.rgbcolor + ")",
							color: "white",
						}}
						onClick={() => handleGetFuncInfo(obj.geometry, obj.properties)}
					>
						<div className="section">
							<div className="row">
								<div className="col-6">Số thứ tự:</div>
								<div className="col-6">{index}</div>
							</div>
						</div>
						<div className="section">
							<div className="row">
								<div className="col-6">Ô phố:</div>
								<div className="col-6">{obj.properties.maopho}</div>
							</div>
						</div>
						<div className="section">
							<div className="row">
								<div className="col-6">Chức năng SDĐ:</div>
								<div className="col-6">{obj.properties.chucnang}</div>
							</div>
						</div>
						<div className="section">
							<div className="row">
								<div className="col-6">
									Diện tích (m<sup>2</sup>):
								</div>
								<div className="col-6">
									{parseFloat(obj.properties.dientich).toFixed(2)}
								</div>
							</div>
						</div>
					</div>
				</>
			);
		}
	};
	const handleClickQHCT = (geoData) => {
		let ranhLayer;
		geoData.forEach((obj) => {
			ranhLayer = JSON.parse(obj.properties.ranhlayer);
			dispatch(actions.setDataInfoQHCT(obj.properties));
		});
		dispatch(actions.setDataGeoJsonQHCT(ranhLayer));
		dispatch(actions.setShowInfoQHCT(true));
	};
	const handleClickDCCB = (geoData) => {
		let ranhLayer;
		geoData.forEach((obj) => {
			ranhLayer = JSON.parse(obj.properties.ranhlayer);
			dispatch(actions.setDataInfoDCCB(obj.properties));
		});
		dispatch(actions.setDataGeoJsonDCCB(ranhLayer));
		dispatch(actions.setShowInfoDCCB(true));
	};
	const handleClickQHPK = () => {
		dispatch(actions.setShowQHSDD(false));
		dispatch(actions.setShowKHSDD(false));
		dispatch(actions.setShowQHPK(true));
		dispatch(actions.setDataArrayKHSDD([]));
		dispatch(actions.setDataArrayQHSDD([]));
		dispatch(actions.setDataArrayQHPK(JSON.parse(state.data.QHPK)));
		dispatch(actions.setDataLocation(JSON.parse(state.data.QHPK)));
	};
	const handleClickQHSDD = () => {
		dispatch(actions.setShowQHPK(false));
		dispatch(actions.setShowKHSDD(false));
		dispatch(actions.setShowQHSDD(true));
		dispatch(actions.setDataArrayQHPK([]));
		dispatch(actions.setDataArrayKHSDD([]));
		dispatch(actions.setDataArrayQHSDD(JSON.parse(state.data.QHSDD)));
		dispatch(actions.setDataLocation(JSON.parse(state.data.QHSDD)));
	};
	const handleClickKHSDD = () => {
		dispatch(actions.setShowQHPK(false));
		dispatch(actions.setShowQHSDD(false));
		dispatch(actions.setShowKHSDD(true));
		dispatch(actions.setDataArrayQHSDD([]));
		dispatch(actions.setDataArrayQHPK([]));
		dispatch(actions.setDataArrayKHSDD(JSON.parse(state.data.KHSDD)));
		dispatch(actions.setDataLocation(JSON.parse(state.data.KHSDD)));
	};
	const handleDownloadCoords = () => {
		const element = document.createElement("a");
		const coordinate = JSON.parse(state.data.ThongTinChung).ranh;
		const fileCoordinates = new Blob([JSON.parse(coordinate)], {
			type: "text/plain;charset=utf-8",
		});
		element.href = URL.createObjectURL(fileCoordinates);
		element.download = "Coordinates.txt";
		element.click();
	};
	return (
		<>
			<div className="div-header-info">
				<h3 className="text-center-info">Thông tin thửa đất</h3>
				<button className="btn-close-info" onClick={handleToggle}>
					<img src="/src/img/close-icon-button.png" width={20} height={20} />
				</button>
			</div>
			<div className="div-scroll-info">
				<div className="div-box-info">
					<div className="section">
						<div className="row">
							<div className="col-6">Tỉnh/Thành:</div>
							<div className="col-6">TP.Hồ Chí Minh</div>
						</div>
						<div className="row">
							<div className="col-6">Quận/Huyện:</div>
							<div className="col-6">
								{JSON.parse(state.data.ThongTinChung).tenquanhuyen}
							</div>
						</div>
						<div className="row">
							<div className="col-6">Phường/Xã:</div>
							<div className="col-6">
								{JSON.parse(state.data.ThongTinChung).tenphuongxa}
							</div>
						</div>
						<div className="row">
							<div className="col-6">Số hiệu thửa đất:</div>
							<div className="col-6">
								{JSON.parse(state.data.ThongTinChung).sothua}
							</div>
						</div>
						<div className="row">
							<div className="col-6">Số hiệu tờ bản đồ:</div>
							<div className="col-6">
								{JSON.parse(state.data.ThongTinChung).soto}
							</div>
						</div>
						<div className="row">
							<div className="col-6">
								Diện tích lô đất(m<sup>2</sup>):
							</div>
							<div className="col-6">
								{parseFloat(JSON.parse(state.data.ThongTinChung).dientich)}
							</div>
						</div>
						{!JSON.parse(state.data.QHPK).length ? null : (
							<div className="row">
								<div className="col-6">Quy hoạch phân khu:</div>
								<div
									className="col-6"
									style={{
										cursor: "pointer",
										color: "#4688d6",
										boxShadow: "3px",
									}}
									onClick={() => handleClickQHPK()}
								>
									{handleGetQHPK(JSON.parse(state.data.ThongTinChung).dsttdoan)}
								</div>
							</div>
						)}
						{!JSON.parse(state.data.QHSDD).length ? null : (
							<div className="row">
								<div className="col-6">Quy hoạch sử dụng đất:</div>
								<div
									className="col-6"
									style={{
										cursor: "pointer",
										color: "#4688d6",
										boxShadow: "3px",
									}}
									onClick={() => handleClickQHSDD()}
								>
									{handleGetQHSDD(
										JSON.parse(state.data.ThongTinChung).dsttdoanqhsdd
									)}
								</div>
							</div>
						)}
						{!JSON.parse(state.data.KHSDD).length ? null : (
							<div className="row">
								<div className="col-6">Kế hoạch sử dụng đất:</div>
								<div
									className="col-6"
									style={{
										cursor: "pointer",
										color: "#4688d6",
										boxShadow: "3px",
									}}
									onClick={() => handleClickKHSDD()}
								>
									Đang cập nhật...
								</div>
							</div>
						)}
						{!JSON.parse(state.data.DCCB).length ? null : (
							<div className="row">
								<div className="col-6">Điều chỉnh cục bộ:</div>
								<div
									className="col-6"
									style={{
										cursor: "pointer",
										color: "#4688d6",
										boxShadow: "3px",
									}}
									onClick={() => handleClickDCCB(JSON.parse(state.data.DCCB))}
								>
									{handleGetDCCB(JSON.parse(state.data.DCCB))}
								</div>
							</div>
						)}
						{!JSON.parse(state.data.QHChiTiet).length ? null : (
							<div className="row">
								<div className="col-6">Quy hoạch chi tiết:</div>
								<div
									className="col-6"
									style={{
										cursor: "pointer",
										color: "#4688d6",
										boxShadow: "3px",
									}}
									onClick={() =>
										handleClickQHCT(JSON.parse(state.data.QHChiTiet))
									}
								>
									{handleGetQHCT(JSON.parse(state.data.QHChiTiet))}
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="div-box-info">
					<div className="section">
						<div className="row">
							<div className="col-4" style={{ cursor: "pointer" }}>
								<PDFDownloadLink
									document={<PDFFile data={state.data} />}
									fileName="Information"
								>
									<div className="div-section-item-col-4">
										<div>Xuất thông tin</div>
									</div>
								</PDFDownloadLink>
							</div>
							<div
								className="col-4"
								style={{ cursor: "pointer" }}
								onClick={handleDownloadCoords}
							>
								<div className="div-section-item-col-4">
									<div>Xuất tọa độ</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						width: "420px",
						height: "20px",
						textAlign: "center",
						fontSize: 20,
						alignItems: "center",
					}}
				>
					Nhấn vào ô chức năng để xem thông tin
				</div>
				<div>
					{state.dataLocation.map((obj, index) => (
						<>{handleChangeArrayFunc(obj, index)}</>
					))}
				</div>
			</div>
		</>
	);
}

export default MainInfo;
