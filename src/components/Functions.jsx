import { actions, useStore } from "../store";
function SectionRow6({ name, value }) {
	return (
		<div className="section">
			<div className="row">
				<div className="col-6">{name}</div>
				<div className="col-6">{value === null ? "Đang cập nhật" : value}</div>
			</div>
		</div>
	);
}
function RowCol6({ name, value }) {
	return (
		<div className="row">
			<div className="col-6">{name}</div>
			<div className="col-6">{value === null ? "Đang cập nhật" : value}</div>
		</div>
	);
}
function FigureCol6Item({ src, border, value, name }) {
	const [state, dispatch] = useStore();
	const { data } = state;
	const handleClickMap = (click, num) => {
		switch (num) {
			case 1:
				dispatch(actions.setDisplayStreet(true));
				break;
			case 2:
				dispatch(actions.setDisplayStatellite(true));
				break;
			case 3:
				dispatch(actions.setDisplayQHPK(true));
				if (data) {
					dispatch(actions.setDataQHPK(JSON.parse(data.QHPK)));
					dispatch(actions.setDataGeoJson(JSON.parse(data.QHPK)));
				}
				break;
			case 4:
				dispatch(actions.setDisplayKHSDD(true));
				if (data) {
					dispatch(actions.setDataKHSDD(JSON.parse(data.KHSDD)));
					dispatch(actions.setDataGeoJson(JSON.parse(data.KHSDD)));
				}
				break;
			case 5:
				dispatch(actions.setDisplayQHSDD(true));
				if (data) {
					dispatch(actions.setDataQHSDD(JSON.parse(data.QHSDD)));
					dispatch(actions.setDataGeoJson(JSON.parse(data.QHSDD)));
				}
				break;
			case 6:
				dispatch(actions.setDisplayBDG(true));
				if (data) {
					dispatch(actions.setDataGeoJson([]));
					dispatch(actions.setData({}));
				}
				break;
			default:
				console.log("!!!");
				break;
		}
	};
	return (
		<figure className="col6-item">
			<img
				className="item-image"
				src={src}
				style={{
					border: border ? "3px solid blue" : "3px solid white",
				}}
				onClick={(event) => handleClickMap(event, value)}
			/>
			<figcaption
				style={{ marginTop: "4px", textAlign: "center", fontSize: 16 }}
			>
				{name}
			</figcaption>
		</figure>
	);
}

export { SectionRow6, RowCol6, FigureCol6Item };
