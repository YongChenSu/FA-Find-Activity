import React, { useState, useContext, useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { MEDIA_QUERY_LG } from "../../styles/base/constants";
import Button from "../../components/common/Button";
import Header from "../../components/common/Header";
import Category from "../../components/common/Category";
import ActivityCard from "../../components/common/ActivityCard";
import Footer from "../../components/common/Footer";
import { FaAngleDoubleRight } from "react-icons/fa";
import { AuthContext } from "../../contexts";

const HomeContainer = styled.div`
  font-family: ${({ theme }) => theme.$fontFamily};
  padding-top: 4rem;
`;

const Banner = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
`;

const ActivityContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;

  ${MEDIA_QUERY_LG} {
    width: 100%;
  }
`;

const MoreActivityButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem 0;
  height: 3rem;
`;

const MoreActivityButton = styled(Button)`
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

const ScrollToTopButton = styled.button`
  color: ${({ theme }) => theme.$colorWhite};
  text-align: center;
  font-size: 1.25rem;
  width: 60px;
  height: 60px;
  position: fixed;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.$colorRed};
  bottom: 176px;
  right: 15px;
  border: 3px solid ${({ theme }) => theme.$colorYellow};
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:hover {
    transition-duration: 0.3s;
    transform: scale(1.1);
  }
`;

const Home = () => {
  const { modifiedData } = useContext(AuthContext);
  const [dataNum, setDataNum] = useState(0);
  const [categoryNum, setCategoryNum] = useState(6);
  const [filteredInput, setFilteredInput] = useState(null);
  const [isShowScrollToTopButton, setIsShowScrollToTopButton] = useState(false);

  const handleChangeCategory = (categoryNum) => {
    setCategoryNum(categoryNum);
    setDataNum(9);
  };

  const handleShowMoreActivity = () => {
    setDataNum((dataNum) => dataNum + 9);
  };

  const handleUpdateInput = (e) => {
    setFilteredInput(e.target.value);
  };

  const handleScrollToTop = () => {
    if (window.pageYOffset > 600) {
      window.scrollTo(0, 380);
    }
  };

  const foundActivityCards = useMemo(() => {
    return modifiedData
      .filter((data) => {
        if (filteredInput === null) {
          return true;
        } else {
          return data.title.toLowerCase().includes(filteredInput.toLowerCase());
        }
      })
      .filter((data) => Number(data.category) === categoryNum)
      .slice(0, dataNum);
  }, [modifiedData, filteredInput, categoryNum, dataNum]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 700) {
        setIsShowScrollToTopButton(true);
      } else {
        setIsShowScrollToTopButton(false);
      }
    });
  });

  useEffect(() => {
    handleShowMoreActivity();
  }, []);

  return (
    <>
      <Header handleUpdateInput={handleUpdateInput} />
      <HomeContainer>
        <Banner src="http://cloud.culture.tw/e_new_upload/task/8e238596-48b3-4fa1-98fd-2983d8fe50fd/71b9f9fc0748870fe5dbea82dfa999c9c5163ef0552131274869912a2d706fdebbd9d4ac8c1bce8d1921070b888664056a3030f6cf35d6881e93948c1aa90efb/58bee0875f431461eab5c1970149fe57c585543c.png" />
        <Category handleChangeCategory={handleChangeCategory} />
        <ActivityContainer>
          {foundActivityCards.map((data) => (
            <ActivityCard
              imageUrl={data.imageUrl}
              title={data.title}
              time={data.endDate}
              locationName={data.showInfo[0].locationName}
              description={data.descriptionFilterHtml}
              category={data.category}
              id={data.id}
              key={data.id}
            />
          ))}
        </ActivityContainer>
        <MoreActivityButtonContainer>
          <MoreActivityButton onClick={handleShowMoreActivity}>
            尋找更多活動
            <FaAngleDoubleRight />
          </MoreActivityButton>
          {isShowScrollToTopButton ? (
            <ScrollToTopButton onClick={handleScrollToTop}>
              Top
            </ScrollToTopButton>
          ) : (
            ""
          )}
        </MoreActivityButtonContainer>
      </HomeContainer>
      <Footer />
    </>
  );
};
export default Home;
