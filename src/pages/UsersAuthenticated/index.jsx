import DisplayDev from "../../components/DisplayDev";
import DevCard from "../../components/DevCard";
import { useSelector } from "react-redux";

const UsersAuthenticated = () => {
  const { devs } = useSelector((state) => state.Users);
  return (
    <>
      <DisplayDev>
        {devs.map((dev, index) => (
          <DevCard
            key={index}
            id={dev.id}
            name={dev.name}
            image={dev.avatar_url}
            module={dev.course_module}
            stacks={
              dev.techs.length !== 0
                ? dev.techs.map((tech) => `${tech.title} | `)
                : "Sem tecnologias ainda."
            }
          />
        ))}
      </DisplayDev>
    </>
  );
};

export default UsersAuthenticated;
