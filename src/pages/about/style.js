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
        background-color: #00306b;
        color: white;
        text-decoration: none;
        border-radius: 25px;
        padding: 0 0.8rem;
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
      margin: 4rem 0 4rem 3rem;
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
        background-color: #00306b;
        color: white;
        text-decoration: none;
        border-radius: 25px;
        padding: 0 0.8rem;
      }
    }

    .banner {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .bannerText {
        color: #3f3d56;
        margin-bottom: 10rem;
      }

      .bannerImg {
        width: 50vw;
        display: inherit;
      }
    }

    .teamAnounce {
      margin: 4rem 0 4rem 3rem;
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

    .container {
      max-width: 70%;
      margin: 0 auto;
    }
    }
`;
