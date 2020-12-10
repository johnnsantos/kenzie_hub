import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap");
  font-family: "Open Sans", sans-serif;
  /* font-family: 'Roboto', sans-serif; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 4px 5px -5px rgba(0, 0, 0, 0.75);
  background-color: transparent;
  /* background-color: #34495e; */
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
    /* display: none; */
  }

  h1 {
    color: gray;
    /* color: #e8f1f2; */
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
      /* color: #e8f1f2; */
      /* border-radius: 2px; */
      /* background-color: #00356b; */
      /* padding: 27px 1.3rem; */

      :nth-last-child(2) {
        border: 1px solid transparent;
        background-color: #00356b;
        border-radius: 2px;
        color: white;
      }

      :nth-last-child(2):hover {
        transition: 0.15s;
        background-color: #004c99;
      }

      :nth-child(-n + 2):hover {
        border-bottom: 1px solid #00356b;
      }

      :last-child {
        border: 1px solid transparent;
      }

      :last-child:hover {
        border-bottom: 1px solid #00356b;
      }
    }
  }

  @media (min-width: 768px) {
    /* img {
      display: inherit;
    } */

    width: inherit;
    margin: 0 2rem;

    .headerList {
      display: inherit;
    }

    .headerDropDown {
      display: none;
    }
  }
`;
