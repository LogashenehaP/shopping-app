import styled from 'styled-components';

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  margin-bottom: 20px;
  color: white;
  font-size: 20px;
  background-color: #4b4b4b;
`;
export const LogoImage = styled.img`
  width: 6vw;
  height: 6vh;
`;
export const AnchorTag = styled.a`
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
