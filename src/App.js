import React, { Component, useState, useEffect, useCallback } from "react";
import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";
import "./styles/main.sass";
import { ThemeProvider } from "emotion-theming";
import theme from "./styles/base/variable";
import { AuthContext } from "../src/contexts";
import { getAuthToken } from "./utils/utils";
import {
  fetchExhibitionData,
  fetchParentChildActivityData,
  fetchMoviesData,
  fetchMusicPerformanceData,
  fetchLectureData,
  getMe,
} from "../src/WebAPI";

const App = () => {
  const [activityData, setActivityData] = useState([]);
  const fetchActivityData = useCallback(async () => {
    const [
      moviesData,
      musicPerformanceData,
      parentChildActivityData,
      lectureData,
      exhibitionData,
    ] = await Promise.all([
      fetchMoviesData(),
      fetchMusicPerformanceData(),
      fetchParentChildActivityData(),
      fetchLectureData(),
      fetchExhibitionData(),
    ]);

    setActivityData((prevState) => [
      ...moviesData,
      ...musicPerformanceData,
      ...parentChildActivityData,
      ...lectureData,
      ...exhibitionData,
    ]);
  }, []);

  useEffect(() => {
    fetchActivityData();
  }, [fetchActivityData]);

  const [user, setUser] = useState(null);
  useEffect(() => {
    if (getAuthToken() !== null) {
      getMe().then((response) => {
        if (response.ok === 1) {
          setUser(response.data);
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ activityData, setActivityData, user, setUser }}
    >
      <ThemeProvider theme={theme.main}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export default App;
