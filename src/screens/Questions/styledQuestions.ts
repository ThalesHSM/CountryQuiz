import styled, { css } from "styled-components";

export const StyledMainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 100%;
`;

export const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c8c8ed;
  background-color: transparent;

  cursor: pointer;
  font-size: 20px;
  color: #8481d8;
  align-items: center;
  min-height: 40px;
  width: 300px;
  :hover {
    background-color: #f2a831;
    border-color: #f2a831;
    transition: 0.3s;
    color: white;
  }
`;

export const StyledOptions = styled.button`
  :hover {
    background-color: #f2a831;
    border-color: #f2a831;
    transition: 0.3s;
    color: white;
  }
`;

export const StyledTryAgainButton = styled.button`
  display: flex;
  margin-bottom: 10px;
  background-color: transparent;
  border: 2px solid;
  border-radius: 10px;
  border-color: purple;
  cursor: pointer;
  font-size: 20px;
  color: purple;
  align-items: center;
  height: 40px;
  padding: 25px;

  :hover {
    background-color: #f2a831;
    border-width: 2;
    border-color: #f2a831;
    transition: 0.3s;
    color: white;
  }
`;
