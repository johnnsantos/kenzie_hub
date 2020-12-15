import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap");
  font-family: "Open Sans", sans-serif;
  margin-top: 2rem;

  .kenzie {
      margin: 2rem 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      h1 {
        font-weight: 400px;
        font-size: 20px;
        max-width: 450px;
      }

      img {
        margin: 0 3rem;
      }

      .api {
        margin: 0 4rem;
        padding: 0 0.8rem;
        background-color: #00306b;
        color: white;
        text-decoration: none;
        border-radius: 10px;
      }
    }

    .banner {
     
      .bannerText {
        color: #3f3d56;
      }

      .bannerImg {
        display: none;
      }
    }

    .teamAnounce {
      margin: 3rem 0 2.5rem 3rem;
      color: #004c99;
    }

    .team {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .card {
        max-width: 200px;
        margin: 0 1rem;

        img {
          border-radius: 10px;
          margin: 1rem 0;
        }
        h1 {
          font-size: 20px;
          color: #3f3d56;
        }

        h2 {
          font-size: 16px;
        }

        a {
          color: #d00000;
          text-decoration: none;
        }
      }
    }
  }

  @media (min-width: 768px) {

    .banner {
      margin-top: 2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: rgba(229, 231, 247, 0.3);
      border: 0px solid #000000;
      border-radius: 90px 90px 20px 20px;
      width: 95%;
      margin: 0 auto;
      padding: 1rem 0;
      box-shadow: 0px 15px 18px -9px rgba(0,0,0,0.75);

      .bannerText {
        color: #3f3d56;
        margin-bottom: 10rem;
        background-color: rgba(229, 231, 247, 0.8);
        border-radius: 29% 71% 34% 66% / 40% 66% 34% 60%;
        border: 0px solid #000000;
        padding: 1rem;
      }

      .bannerImg {
        width: 50vw;
        display: inherit;
      }
    }

    .kenzie {
      margin: inherit;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 0 auto;
      h1 {
        font-weight: 400px;
        font-size: 20px;
        max-width: 450px;
        margin: 0 3rem;
      }

      img {
        margin: inherit;
      }

      .api {
        margin: 0;
        background-color: #00306b;
        color: white;
        text-decoration: none;
        border-radius: 10px;
        padding: 0 1rem;
      }

      .kenzieButton {
        padding: 0 2rem;
      }
    }

    .left {
      justify-content: flex-start; 
    }

    .right {
      justify-content: flex-end;
    }

    .teamAnounce {
      margin: 2rem auto 2.5rem auto;
      color: #004c99;
      display: flex;
      justify-content: center;
    }

.kenzie, .teamAnounce {
  max-width: 60%;
}    

    .team {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      
      .card {
        max-width: 200px;
        margin: 0 1rem;

        img {
          border-radius: 10px;
          margin: 1rem 0;
        }
        h1 {
          font-size: 20px;
          color: #3f3d56;
        }

        h2 {
          font-size: 16px;
        }

        a {
          color: #d00000;
          text-decoration: none;
        }
      }
    }
    @media (min-width: 2560px) {
      .banner {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .bannerText {
        color: #3f3d56;
        margin-bottom: 10rem;
        font-size:30px;
      }

      .bannerImg {
        width: 45vw;
        display: inherit;
      }
    }

    .containerAbout {
      max-width: 70%;
      margin: 0 auto;
    }
    }
`;
