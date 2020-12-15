import { getAuthToken } from "./utils/utils";
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
