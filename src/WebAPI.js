import { getAuthToken } from "./utils/utils";

// const AUTHORIZATION_KEY = "CWB-15DFF2FC-FFFB-49E9-BF7F-EBB9164F4B47";
// const CURRENT_WEATHER_BASE_URL =
//   "https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization";
// const FORECAST_BASE_URL =
//   "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization";
// const LOCATION_NAME_FORECAST = "臺北市";
// const LOCATION_NAME = "臺北";

const EXHIBITION_BASE_URL =
  "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
const PARENT_CHILD_BASE_URL =
  "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=4";
const MOVIES_BASE_URL =
  "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=8";
const MUSIC_PERFORMANCE_BASE_URL =
  "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1";
const LECTURE_BASE_URL =
  "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=7";
const VILLAGE_FOOD_BASE_URL =
  "https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx";

// export const fetchCurrentWeatherData = () => {
//   return fetch(
//     `${CURRENT_WEATHER_BASE_URL}=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       const locationData = data.records.location[0];
//       const weatherElements = locationData.weatherElement.reduce(
//         (neededElements, item) => {
//           if (["WDSD", "TEMP"].includes(item.elementName)) {
//             neededElements[item.elementName] = item.elementValue;
//           }
//           return neededElements;
//         },
//         {}
//       );

//       return {
//         observationTime: locationData.time.obsTime,
//         locationName: locationData.locationName,
//         temperature: weatherElements.TEMP,
//         windSpeed: weatherElements.WDSD,
//       };
//     });
// };

// export const fetchForecastData = () => {
//   return fetch(
//     `${FORECAST_BASE_URL}=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME_FORECAST}`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       const locationData = data.records.location[0];
//       const weatherElements = locationData.weatherElement.reduce(
//         (neededElements, item) => {
//           if (["Wx", "PoP", "CI", "MinT", "MaxT"].includes(item.elementName)) {
//             neededElements[item.elementName] = item.time[0].parameter;
//           }
//           return neededElements;
//         },
//         {}
//       );

//       return {
//         description: weatherElements.Wx.parameterName,
//         weatherCode: weatherElements.Wx.parameterValue,
//         rainPossibility: weatherElements.PoP.parameterName,
//         comfortability: weatherElements.CI.parameterName,
//         minTemperature: weatherElements.MinT.parameterName,
//         maxTemperature: weatherElements.MaxT.parameterName,
//       };
//     });
// };

export const fetchExhibitionData = () => {
  return fetch(`${EXHIBITION_BASE_URL}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchParentChildActivityData = () => {
  return fetch(`${PARENT_CHILD_BASE_URL}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchMoviesData = () => {
  return fetch(`${MOVIES_BASE_URL}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchMusicPerformanceData = () => {
  return fetch(`${MUSIC_PERFORMANCE_BASE_URL}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchLectureData = () => {
  return fetch(`${LECTURE_BASE_URL}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchVillageFoodData = () => {
  return fetch(`${VILLAGE_FOOD_BASE_URL}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

// getPost, login, getMe

const LIDEMY_BASE_URL = "https://student-json-api.lidemy.me";

export const getPosts = () => {
  return fetch(
    `${LIDEMY_BASE_URL}/posts?_sort=createdAt&_order=desc`
  ).then((response) => response.json());
};

export const login = (username, password) => {
  return fetch(`${LIDEMY_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const register = (nickname, username, password) => {
  return fetch(`${LIDEMY_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nickname,
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const getMe = () => {
  const token = getAuthToken();
  return fetch(`${LIDEMY_BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
