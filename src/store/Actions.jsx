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
//-----------------------Set Data---------------------------//
export const setData = (payload) => ({
	type: SET_DATA,
	payload,
});
export const setIsLoading = (payload) => ({
	type: SET_IS_LOADING,
	payload,
});
export const setDataLocation = (payload) => ({
	type: SET_DATA_LOCATION,
	payload,
});
export const setShowInfo = (payload) => ({
	type: SET_SHOW_INFO,
	payload,
});
export const setMarkedPosition = (payload) => ({
	type: SET_MARKED_POSITION,
	payload,
});
//Function Information:-------------------------
export const setDataGeoJsonFunc = (payload) => ({
	type: SET_DATA_GEOJSON_FUNC,
	payload,
});
export const setDataInfoFunc = (payload) => ({
	type: SET_DATA_INFO_FUNC,
	payload,
});
export const setShowInfoFunction = (payload) => ({
	type: SET_SHOW_INFO_FUNCTION,
	payload,
});
//QHPK:-------------------------------------------
export const setDataArrayQHPK = (payload) => ({
	type: SET_DATA_ARRAY_QHPK,
	payload,
});
export const setShowQHPK = (payload) => ({
	type: SET_SHOW_QHPK,
	payload,
});
//QHSDD:-------------------------------------------
export const setDataArrayQHSDD = (payload) => ({
	type: SET_DATA_ARRAY_QHSDD,
	payload,
});
export const setShowQHSDD = (payload) => ({
	type: SET_SHOW_QHSDD,
	payload,
});
//QHPK:-------------------------------------------
export const setDataArrayKHSDD = (payload) => ({
	type: SET_DATA_ARRAY_KHSDD,
	payload,
});
export const setShowKHSDD = (payload) => ({
	type: SET_SHOW_KHSDD,
	payload,
});
//QHCT:-----------------------------------------
export const setDataGeoJsonQHCT = (payload) => ({
	type: SET_DATA_GEOJSON_QHCT,
	payload,
});
export const setDataInfoQHCT = (payload) => ({
	type: SET_DATA_INFO_QHCT,
	payload,
});
export const setShowInfoQHCT = (payload) => ({
	type: SET_SHOW_INFO_QHCT,
	payload,
});
//DCCB:-------------------------------------------
export const setDataGeoJsonDCCB = (payload) => ({
	type: SET_DATA_GEOJSON_DCCB,
	payload,
});
export const setDataInfoDCCB = (payload) => ({
	type: SET_DATA_INFO_DCCB,
	payload,
});
export const setShowInfoDCCB = (payload) => ({
	type: SET_SHOW_INFO_DCCB,
	payload,
});
