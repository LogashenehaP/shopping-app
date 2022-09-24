import styled from 'styled-components';

export const FilterDivision = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchSpace = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  padding: 15px;
  margin: 10px;
  background-color: whiteSmoke;
  color: #4b4b4b;
  border-radius: 3px;
`;

export const Input = styled.input`
  background: whiteSmoke;
  padding: 0;
  margin: 0;
  color: #4b4b4b;
  outline: none;
  border: none;
  font-size: 18px;

  ::placeholder {
    color: #4b4b4b;
  }
`;

export const SortSpace = styled(SearchSpace)`
  width: 10%;
`;

export const FilterSpace = styled(SortSpace)``;

export const CardContainer = styled.div`
  width: 90%;
  box-shadow: 0 0 3px slateGray;
  margin: 0 auto;
`;
export const CardItem = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  text-align: center;
`;
export const IndividualCard = styled.div`
  width: 200px;
  height: 320px;
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 3px slateGray;
  border: 2px solid #dbdbdb;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s;
  &:hover {
    border: 2px outset purple;
    background: whiteSmoke;
  }
`;

export const ImageWrapper = styled.div`
  width: 150px;
  margin: 0 auto;
  object-fit: fit;
`;

export const ProductImage = styled.img`
  width: 100%;
`;
export const ParaTag = styled.p`
  margin: 0;
  padding: 5px;
  color: slateGray;
`;
export const HeadingTag = styled.h3`
  color: black;
  font-size:20px;
  font-weight:500;
  padding:5px;
`;
export const Container = styled.div`
  margin: 20px auto;
  padding: 20px 0px;
  width: 94%;
  box-shadow: 0 0 3px slateGray;
`;
