import {
	SET_DATA,
	SET_DATA_ARRAY_KHSDD,
	SET_DATA_ARRAY_QHPK,
	SET_DATA_ARRAY_QHSDD,
	SET_DATA_GEOJSON_DCCB,
	SET_DATA_GEOJSON_FUNC,
	SET_DATA_GEOJSON_QHCT,
	SET_DATA_INFO_DCCB,
	SET_DATA_INFO_FUNC,
	SET_DATA_INFO_QHCT,
	SET_DATA_LOCATION,
	SET_IS_LOADING,
	SET_MARKED_POSITION,
	SET_SHOW_INFO,
	SET_SHOW_INFO_DCCB,
	SET_SHOW_INFO_FUNCTION,
	SET_SHOW_INFO_QHCT,
	SET_SHOW_KHSDD,
	SET_SHOW_QHPK,
	SET_SHOW_QHSDD,
} from "./Constants";

const initState = {
	//Data:---------------------------------------------------
	center: { lat: 10.829829938889858, lng: 106.76179012254107 },
	data: {},
	isLoading: false,
	//--------------------------------------------------------
	dataLocation: [],
	showInfo: false,
	markedPosition: {
		latitude: 0,
		longitude: 0,
	},
	//Function Information:
	showInfoFunc: false,
	dataGeoJsonFunc: [],
	dataInfoFunc: {},
	//QHPK:
	dataArrayQHPK: [],
	showQHPK: true,
	//QHSDD:
	dataArrayQHSDD: [],
	showQHSDD: false,
	//KHSDD:
	dataArrayKHSDD: [],
	showKHSDD: false,
	//QHCT:
	dataGeoJsonQHCT: [],
	dataInfoQHCT: {},
	showInfoQHCT: false,
	//DCCB:
	dataGeoJsonDCCB: [],
	dataInfoDCCB: {},
	showInfoDCCB: false,
};
function Reducer(state, action) {
	switch (action.type) {
		//Data:----------------------------
		case SET_DATA:
			return {
				...state,
				data: action.payload,
			};
		case SET_IS_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};

		case SET_DATA_LOCATION:
			return {
				...state,
				dataLocation: action.payload,
			};

		case SET_SHOW_INFO:
			return {
				...state,
				showInfo: action.payload,
			};
		case SET_MARKED_POSITION:
			return {
				...state,
				markedPosition: action.payload,
			};
		//Function Information:-----------------
		case SET_DATA_GEOJSON_FUNC:
			return {
				...state,
				dataGeoJsonFunc: action.payload,
			};
		case SET_DATA_INFO_FUNC:
			return {
				...state,
				dataInfoFunc: action.payload,
			};
		case SET_SHOW_INFO_FUNCTION:
			return {
				...state,
				showInfoFunc: action.payload,
			};
		//QHPK:---------------------------------
		case SET_DATA_ARRAY_QHPK:
			return {
				...state,
				dataArrayQHPK: action.payload,
			};
		case SET_SHOW_QHPK:
			return {
				...state,
				showQHPK: action.payload,
			};
		//QHSDD:---------------------------------
		case SET_DATA_ARRAY_QHSDD:
			return {
				...state,
				dataArrayQHSDD: action.payload,
			};
		case SET_SHOW_QHSDD:
			return {
				...state,
				showQHSDD: action.payload,
			};
		//QHSDD:---------------------------------
		case SET_DATA_ARRAY_KHSDD:
			return {
				...state,
				dataArrayKHSDD: action.payload,
			};
		case SET_SHOW_KHSDD:
			return {
				...state,
				showKHSDD: action.payload,
			};
		//QHCT:---------------------------------
		case SET_DATA_GEOJSON_QHCT:
			return {
				...state,
				dataGeoJsonQHCT: action.payload,
			};
		case SET_DATA_INFO_QHCT:
			return {
				...state,
				dataInfoQHCT: action.payload,
			};
		case SET_SHOW_INFO_QHCT:
			return {
				...state,
				showInfoQHCT: action.payload,
			};
		//DCCB:---------------------------------
		case SET_DATA_GEOJSON_DCCB:
			return {
				...state,
				dataGeoJsonDCCB: action.payload,
			};
		case SET_DATA_INFO_DCCB:
			return {
				...state,
				dataInfoDCCB: action.payload,
			};
		case SET_SHOW_INFO_DCCB:
			return {
				...state,
				showInfoDCCB: action.payload,
			};
		default:
			throw new Error("Invalid Actions!");
	}
}
export { initState };
export default Reducer;
