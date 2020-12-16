import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap");
  font-family: "Open Sans", sans-serif;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 4px 5px -5px rgba(0, 0, 0, 0.75);
  background-color: transparent;
  padding: 0.3rem;
  height: 80px;
  width: 100%;

  .headerList {
    margin: 0 2.5rem 0 0;
  }

  .headerLogo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .kenzieLogoHeader {
    margin-right: 1rem;
    max-width: 50px;
  }

  h1 {
    color: gray;
  }

  h3 {
    margin: 0;
  }

  .headerList {
    display: none;
  }

  .headerList ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      text-align: center;
      font-size: 15px;
      font-weight: bold;
      margin: 0 0.5rem;
      padding: 0.5rem 1.3rem;
      cursor: pointer;
      transition: 0.25s;
      box-sizing: border-box;
      color: #00356b;
      position: relative;

      h3 {
        margin: 0;
      }

      :nth-last-child(1) {
        border: 1px solid transparent;
        background-color: #00356b;
        border-radius: 2px;
        color: white;
        padding-right: 2.5rem;

        .profilePic {
          position: absolute;
          height: 60px;
          width: 60px;
          top: 50%;
          right: -25%;
          transform: translateY(-50%);
          border-radius: 50px;
          object-fit: cover;
        }
      }

      :nth-last-child(1):hover {
        transition: 0.15s;
        background-color: #004c99;
      }

      :nth-child(-n + 2):hover {
        border-bottom: 1px solid #00356b;
      }
    }
  }

  @media (min-width: 957px) {
    height: 70px;
    width: inherit;
    margin: 0 2rem;

    .headerList {
      display: inherit;
      margin: 0 2.5rem 0 0;
    }

    .headerDropDown {
      display: none;
    }
  }

  @media (max-width: 324px) {
    padding: 1rem 0 1rem 0;
  }
`;
