import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;
  &:hover {
    background-color: red;
  }
  ${({ isBlack }) => isBlack && "background-color: black;"}
`;

export default StyledBox;
