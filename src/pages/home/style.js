import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap");
  font-family: "Open Sans", sans-serif;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 1rem;
  margin: 2rem 0;

  background-color: rgba(229, 231, 247, 0.3);
  border-radius: 90px 90px 20px 20px;
  box-shadow: 0px 15px 18px -9px rgba(0, 0, 0, 0.75);

  img {
    width: 350px;
    margin: 1rem;
  }

  .bannerText {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;

    background-color: rgba(229, 231, 247, 0.8);
    border-radius: 29% 71% 34% 66% / 40% 66% 34% 60%;
    border: 0px solid #000000;
    padding: 1rem;

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
      width: 200px;
      height: 60px;
      margin-top: 1rem;
      color: white;
      border: none;
      background-color: #2a3b6f;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;

      :hover {
        background-color: #425dae;
      }
    }
  }

  @media (min-width: 957px) {
    width: 95%;
    margin: 2rem auto;

    .bannerText > .h1Logged {
      font-size: 50px;
    }

    .bannerText > .h2Logged {
      font-size: 40px;
      color: #3f3d56;
    }

    img {
      width: 650px;
      margin: 1rem;
    }
  }
`;
