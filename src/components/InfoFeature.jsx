import { useEffect } from "react";
import InfoFunction from "./InfoFunction";
import { actions, useStore } from "../store";
import MainInfo from "./MainInfo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import InfoQHCT from "./InfoQHCT";
import InfoDCCB from "./InfoDCCB";
function InfoFeature() {
	const [state, dispatch] = useStore();
	useEffect(() => {
		dispatch(actions.setDataArrayQHPK(JSON.parse(state.data.QHPK)));
	}, [state.data]);
	return (
		<div className="div-info">
			<>
				{state.isLoading === true ? (
					<Skeleton
						duration={1.5}
						circle={true}
						height={100}
						width={100}
						borderRadius={50}
					/>
				) : (
					<>
						{state.showInfoFunc ? (
							<InfoFunction />
						) : (
							<>
								{state.showInfoQHCT ? (
									<InfoQHCT />
								) : (
									<>{state.showInfoDCCB ? <InfoDCCB /> : <MainInfo />}</>
								)}
							</>
						)}
					</>
				)}
			</>
		</div>
	);
}

export default InfoFeature;
