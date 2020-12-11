# FA-Find-Activity

FA-Find-Activity is a activity information website.

> Website Link : https://yongchensu.github.io/FA-Find-Activity/#/

- User can get activity information from Government Open Data (https://data.gov.tw/)
- Users can find activity through search, filter and sort by five different kinds of categories.
- Users can get basic weather information of Taipei, Taiwan.

## Technologies

- Front-End Fundamental
  - HTML / CSS / JavaScript
  - RWD
- Front-End Frameworks
  - React
  - React Router
  - React Context API
  - useState, useEffect, useContext, useCallback, useMemo
  - custom hooks: useWeatherAPI
  - styled component
- Other
  - Version Control : Git / GitHub
  - WebStorage : localStorage
  - Unit Test : Jest

## Third-party API

- [Center Weather Bureau](https://opendata.cwb.gov.tw/dist/opendata-swagger.html)
- [Ministry of the Interior Open Data](https://data.gov.tw/)

## Core Components Structure ( 2020.12 )

- compoents
  ![compoents](https://i.imgur.com/q12H9st.jpg)

- pages
  ![[pages]](https://i.imgur.com/uvfNp7s.jpg)

## Website Demo

### Filtered by different kinds of activity categories

![Filtered by different kinds of activity categories](https://raw.githubusercontent.com/YongChenSu/FA-Find-Activity/312e15693d695f199a51070841cee693d9624928/src/assets/img/fa-filter-by-categories.gif)

### Keyword Search and Show Correspond Activity Immediately

![](https://raw.githubusercontent.com/YongChenSu/FA-Find-Activity/312e15693d695f199a51070841cee693d9624928/src/assets/img/fa-search.gif)

### Infinite Scroll with Load More Button

![infinite scroll with load more button ](https://raw.githubusercontent.com/YongChenSu/FA-Find-Activity/312e15693d695f199a51070841cee693d9624928/src/assets/img/fa-infinite-scroll.gif)

### Guide to Home page after Register or Login

![guide to home page after register or login](https://raw.githubusercontent.com/YongChenSu/FA-Find-Activity/312e15693d695f199a51070841cee693d9624928/src/assets/img/fa-login.gif)

### RWD

![rwd](https://raw.githubusercontent.com/YongChenSu/FA-Find-Activity/312e15693d695f199a51070841cee693d9624928/src/assets/img/fa-rwd.gif)

## User Story and Wireframe

- Wireframe Overview
  ![Wireframe overview](https://i.imgur.com/frnKQn5.jpg)

- [More Details about User Story and Wireframe](https://hackmd.io/cS3crB9oRKyfpIexOGw72Q?view)
  (Link: https://hackmd.io/cS3crB9oRKyfpIexOGw72Q?view)

## To Do

- User profile page for looking over favorite activities.
- Show more weather information by precise activity hold at.
- Third-party API (Google login, Google Map).
