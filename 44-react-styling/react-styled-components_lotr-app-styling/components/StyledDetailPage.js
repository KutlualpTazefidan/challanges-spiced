import styled from "styled-components";

const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  .cover-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
    ${console.log(({ color }) => color)}
    background-color: ${({ color }) => color};

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`;

// function StyledDetailPage() {
//   return (
//     <div>StyledDetailPage</div>
//   )
// }

export default StyledDetailPage;
