import { team } from "../../helpers";

const AboutCard = () => {
  return team.map((info, index) => (
    <div key={index} className="card">
      <img src={info.image} alt="" />
      <h1>{info.name}</h1>
      <a href={info.linkedin} target="_blank">
        <h2>Linkedin</h2>
      </a>
    </div>
  ));
};

export default AboutCard;
