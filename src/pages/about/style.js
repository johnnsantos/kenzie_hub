import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap");
  font-family: "Open Sans", sans-serif;

  @media (min-width: 768px) {
    .banner {
      margin-top: 2rem;
      display: flex;

      .bannerText {
        position: absolute;
        top: 35%;
        right: 10%;
        color: #3f3d56;
      }

      .bannerImg {
        width: 50vw;
        padding: 0 0 0 8rem;
      }
    }

    .team {
      display: flex;
      justify-content: space-around;

      .card {
        max-width: 200px;
      }
    }
  }
`;
