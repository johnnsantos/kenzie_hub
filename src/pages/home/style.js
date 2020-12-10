import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap");
  font-family: "Open Sans", sans-serif;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  background-color: rgba(53, 74, 95, 0.2);
  border-radius: 3px;

  padding: 2rem 1rem;

  margin: 2rem 0;
  img {
    width: 350px;
    margin: 1rem;
  }

  .bannerText {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;

    span {
      color: rgba(6, 147, 11, 0.9);
      margin: 0.3rem 0;
      display: block;
      text-align: left;
    }

    h1 {
      font-size: 24px;
      text-align: center;
      color: #6272a4;
    }

    h2 {
      font-weight: 400;
      font-size: 20px;
      text-align: center;
      color: #3b3b3b;
    }

    button {
      text-align: center;
      font-size: 21px;

      width: 180px;
      height: 40px;
      margin-top: 1rem;

      color: white;

      border: none;

      background-color: #2a3b6f;
      border-radius: 2px;

      cursor: pointer;

      :hover {
        background-color: #425dae;
      }
    }
  }

  @media (min-width: 768px) {
    width: 80%;
    margin: 2rem auto;

    img {
      width: 450px;
      margin: 1rem;
    }
  }
`;
