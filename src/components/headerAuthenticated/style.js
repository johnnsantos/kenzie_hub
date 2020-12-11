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
  height: 60px;
  width: 100%;

  .headerLogo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  img {
    margin-right: 1rem;
  }

  h1 {
    color: gray;
  }

  .headerList {
    display: none;
  }

  .headerList ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
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

        .profilePic {
          position: absolute;
          max-width: 50px;
          top: 50%;
          right: -45%;
          transform: translateY(-50%);
          border-radius: 100%;
        }
      }

      :nth-last-child(1):hover {
        transition: 0.15s;
        background-color: #004c99;
      }

      :nth-child(-n + 2):hover {
        border-bottom: 1px solid #00356b;
      }

      .profilePic {
      }
    }
  }

  @media (min-width: 768px) {
    width: 95%;
    margin: 0 auto;

    .headerLogo {
      margin: 0 0 0 2rem;
    }

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
