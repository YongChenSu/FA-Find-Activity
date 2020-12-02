import React, { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "../../components/common/Button";
import Header from "../../components/common/Header";
import Category from "../../components/common/Category";
import ActivityCard from "../../components/common/ActivityCard";
import Footer from "../../components/common/Footer";
import { FaAngleDoubleRight } from "react-icons/fa";
import { AuthContext } from "../../contexts";
import SearchBar from "../../components/common/SearchBar";
const HomeContainer = styled.div`
  font-family: ${({ theme }) => theme.$fontFamily};
  padding-top: 4rem;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 380px;
  background-color: ${({ theme }) => theme.$colorYellow};
`;

const ActivityContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

const Home = () => {
  const { modifiedData } = useContext(AuthContext);
  const [dataNum, setDataNum] = useState(0);
  const [categoryNum, setCategoryNum] = useState(6);
  const [input, setInput] = useState("");

  const handleChangeCategory = (categoryNum) => {
    setCategoryNum(categoryNum);
    setDataNum(9);
  };

  const handleShowMoreActivity = () => {
    setDataNum((dataNum) => dataNum + 9);
  };

  const ActivityCardLists = modifiedData
    .map((data) => (
      <ActivityCard
        imageUrl={data.imageUrl}
        title={data.title}
        time={data.endDate}
        locationName={data.showInfo[0].locationName}
        description={data.descriptionFilterHtml}
        category={data.category}
        id={data.id}
      />
    ))
    .filter((data) => Number(data.props.category) === categoryNum)
    .slice(1, dataNum + 1);

  const updateInput = (input) => {
    modifiedData
      .filter((data) => {
        data.title.toLowerCase().includes(input.toLowerCase());
      })
      .map((data) => (
        <ActivityCard
          imageUrl={data.imageUrl}
          title={data.title}
          time={data.endDate}
          locationName={data.showInfo[0].locationName}
          description={data.descriptionFilterHtml}
          category={data.category}
          id={data.id}
        />
      ));

    return modifiedData;
  };

  useEffect(() => {
    handleShowMoreActivity();
  }, []);

  return (
    <>
      <Header />
      <HomeContainer>
        <SearchBar input={input} onChange={updateInput} />
        <Carousel />
        <Category handleChangeCategory={handleChangeCategory} />
        <ActivityContainer>{ActivityCardLists}</ActivityContainer>
        <MoreActivityButtonContainer>
          <MoreActivityButton onClick={handleShowMoreActivity}>
            尋找更多活動
            <FaAngleDoubleRight />
          </MoreActivityButton>
        </MoreActivityButtonContainer>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
