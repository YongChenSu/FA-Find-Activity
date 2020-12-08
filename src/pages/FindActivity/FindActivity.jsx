import React, { useState, useEffect, useMemo, useContext } from "react";
import styled from "@emotion/styled";
import Button from "../../components/common/Button";
import Header from "../../components/common/Header";
import Category from "../../components/common/Category";
import ActivityCard from "../../components/common/ActivityCard";
import Footer from "../../components/common/Footer";
import { FaAngleDoubleRight } from "react-icons/fa";
import LoadingImg from "../../components/common/LoadingImg";
import { AuthContext } from "../../contexts";

const FindActivityContainer = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.$fontFamily};
  min-height: calc(100vh - 4rem);
`;

const ActivityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

const FindActivity = () => {
  const { modifiedData } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [dataNum, setDataNum] = useState(0);
  const [categoryNum, setCategoryNum] = useState(6);
  const [filteredInput, setFilteredInput] = useState(null);
  const [isShowScrollToTopButton, setIsShowScrollToTopButton] = useState(false);

  const handleChangeCategory = (categoryNum) => {
    setCategoryNum(categoryNum);
    setDataNum(9);
  };

  const handleUpdateInput = (e) => {
    setFilteredInput(e.target.value);
  };

  const handleScrollToTop = () => {
    if (window.pageYOffset > 600) {
      window.scrollTo(0, 0);
    }
  };

  const handleShowMoreActivity = () => {
    setDataNum((dataNum) => dataNum + 9);
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

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      <Header handleUpdateInput={handleUpdateInput} />
      {loading === false ? (
        <FindActivityContainer>
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
          <MoreActButtonContainer>
            <MoreActButton onClick={handleShowMoreActivity}>
              尋找更多活動
              <FaAngleDoubleRight />
            </MoreActButton>
            {isShowScrollToTopButton ? (
              <ScrollToTopButton onClick={handleScrollToTop}>
                Top
              </ScrollToTopButton>
            ) : (
              ""
            )}
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
