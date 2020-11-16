// import React, { useState, useEffect } from 'react'
// import styled from '@emotion/styled'
// import Button from '../../components/common/Button'
// import Header from '../../components/common/Header'
// import Category from '../../components/common/Category'
// import ActivityCard from '../../components/common/ActivityCard'
// import Footer from '../../components/common/Footer'
// import { FaAngleDoubleRight } from 'react-icons/fa'
// import LoadingImg from '../../components/common/LoadingImg'

// const FindActivityContainer = styled.div`
//   padding-top: 4rem;
//   max-width: 1200px;
//   margin: 0 auto;
//   font-family: ${({ theme }) => theme.$fontFamily};
// `

// const ActivityContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `

// const SelectContainer = styled.div`
//   margin: 0 auto;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
// `

// const Select = styled.select`
//   width: 200px;
//   height: 2.5rem;
//   font-size: 1.25rem;
//   font-weight: 500;
//   letter-spacing: 1px;
//   color: ${({ theme }) => theme.$colorRed};
//   padding: 0.25rem 0.5rem;
//   border: none;
//   border-radius: ${({ theme }) => theme.$borderRadius};
//   opacity: 0.8;
//   position: relative;
//   margin: 1rem;
//   border: 1.5px solid ${({ theme }) => theme.$colorRed};

//   &:focus {
//     outline: 0;
//   }
// `

// const Option = styled.option`
//   color: black;
//   background: white;
//   font-weight: small;
//   display: flex;
//   white-space: pre;
//   min-height: 20px;
//   padding: 0px 2px 1px;
// `

// const MoreActButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 1rem 0 2rem 0;
//   height: 3rem;
// `

// const MoreActButton = styled(Button)`
//   width: 330px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     color: ${({ theme }) => theme.$colorWhite};
//     box-shadow: inset 22rem 0 0 0 ${({ theme }) => theme.$colorRed};
//     border: 0;
//   }

//   svg {
//     margin: 0 0.5rem;
//   }
// `

// const EXHIBITION_BASE_URL = `https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6`

// const FindActivity = () => {
//   const [loading, setLoading] = useState(true)
//   const [exhibitionData, setExhibitionData] = useState([])
//   const fetchExhibitionData = () => {
//     fetch(`${EXHIBITION_BASE_URL}`)
//       .then((response) => response.json())
//       .then((data) => setExhibitionData(data))
//   }

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 3000)
//   }, [])

//   useEffect(fetchExhibitionData, [])
//   return (
//     <>
//       <Header />
//       {loading === false ? (
//         <FindActivityContainer>
//           <Category />
//           <SelectContainer>
//             <Select>
//               <Option value='' hidden>
//                 活動日期
//               </Option>
//               <Option value='1'>2020/11</Option>
//               <Option value='2'>2020/12</Option>
//               <Option value='3'>2021/01</Option>
//             </Select>
//             <Select>
//               <Option value='' hidden>
//                 活動地點
//               </Option>
//               <Option value='1'>北部</Option>
//               <Option value='2'>中部</Option>
//               <Option value='3'>南部</Option>
//               <Option value='4'>東部、離島</Option>
//             </Select>
//             <Select>
//               <Option value='' hidden>
//                 活動價格
//               </Option>
//               <Option value='1'>500 ↓</Option>
//               <Option value='2'>500~1000</Option>
//               <Option value='3'>1000~2000</Option>
//               <Option value='4'>2000 ↑</Option>
//             </Select>
//           </SelectContainer>
//           <ActivityContainer>
//             {console.log(exhibitionData)}
//             {exhibitionData
//               .filter((data) => data.imageUrl !== '')
//               .map((data) => (
//                 <ActivityCard
//                   imageUrl={data.imageUrl}
//                   title={data.title}
//                   time={data.endDate}
//                   locationName={data.showInfo[0].locationName}
//                   description={data.descriptionFilterHtml}
//                 />
//               ))}
//           </ActivityContainer>
//           <MoreActButtonContainer>
//             <MoreActButton>
//               尋找更多活動
//               <FaAngleDoubleRight />
//             </MoreActButton>
//           </MoreActButtonContainer>
//         </FindActivityContainer>
//       ) : (
//         <LoadingImg />
//       )}
//       <Footer />
//     </>
//   )
// }

// export default FindActivity

import React, { useState, useEffect, useCallback, useContext } from "react";
import styled from "@emotion/styled";
import Button from "../../components/common/Button";
import Header from "../../components/common/Header";
import Category from "../../components/common/Category";
import ActivityCard from "../../components/common/ActivityCard";
import Footer from "../../components/common/Footer";
import { FaAngleDoubleRight } from "react-icons/fa";
import LoadingImg from "../../components/common/LoadingImg";
import {
  fetchExhibitionData,
  fetchParentChildActivityData,
  fetchMoviesData,
  fetchMusicPerformanceData,
  fetchLectureData,
  fetchVillageFoodData,
} from "../../../src/WebAPI";
import { AuthContext } from "../../contexts";

const FindActivityContainer = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.$fontFamily};
`;

const ActivityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SelectContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Select = styled.select`
  width: 200px;
  height: 2.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.$colorRed};
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.$borderRadius};
  opacity: 0.8;
  position: relative;
  margin: 1rem;
  border: 1.5px solid ${({ theme }) => theme.$colorRed};

  &:focus {
    outline: 0;
  }
`;

const Option = styled.option`
  color: black;
  background: white;
  font-weight: small;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
`;

const MoreActButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem 0;
  height: 3rem;
`;

const MoreActButton = styled(Button)`
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.$colorWhite};
    box-shadow: inset 22rem 0 0 0 ${({ theme }) => theme.$colorRed};
    border: 0;
  }

  svg {
    margin: 0 0.5rem;
  }
`;

const FindActivity = () => {
  const [loading, setLoading] = useState(false);
  const { activityData, setActivityData } = useContext(AuthContext);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 2500);
  // }, []);

  return (
    <>
      <Header />
      {loading === false ? (
        <FindActivityContainer>
          <Category />
          <SelectContainer>
            <Select>
              <Option value="" hidden>
                活動日期
              </Option>
              <Option value="1">2020/11</Option>
              <Option value="2">2020/12</Option>
              <Option value="3">2021/01</Option>
            </Select>
            <Select>
              <Option value="" hidden>
                活動地點
              </Option>
              <Option value="1">北部</Option>
              <Option value="2">中部</Option>
              <Option value="3">南部</Option>
              <Option value="4">東部、離島</Option>
            </Select>
            <Select>
              <Option value="" hidden>
                活動價格
              </Option>
              <Option value="1">500 ↓</Option>
              <Option value="2">500~1000</Option>
              <Option value="3">1000~2000</Option>
              <Option value="4">2000 ↑</Option>
            </Select>
          </SelectContainer>
          <ActivityContainer>
            {Object.values(activityData)
              .filter((data) => data.imageUrl !== "")
              .map((data) => (
                <ActivityCard
                  imageUrl={data.imageUrl}
                  title={data.title}
                  time={data.endDate}
                  // locationName={data.showInfo[0].locationName}
                  description={data.descriptionFilterHtml}
                />
              ))}
          </ActivityContainer>
          <MoreActButtonContainer>
            <MoreActButton>
              尋找更多活動
              <FaAngleDoubleRight />
            </MoreActButton>
          </MoreActButtonContainer>
        </FindActivityContainer>
      ) : (
        <LoadingImg />
      )}
      <Footer />
    </>
  );
};

export default FindActivity;
