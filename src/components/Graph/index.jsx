import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

const Graph = () => {
  const { devs } = useSelector((state) => state.Users);

  let techsTitle = [];
  devs.map((dev) => dev.techs.map((tech) => techsTitle.push(tech.title)));

  const countTechs = () => {
    techsTitle = techsTitle.sort();
    let count;
    return techsTitle.map((tech, index) => {
      count = techsTitle[index - 1] === tech ? count + 1 : 1;
      return { tech: tech, count: count };
    });
  };

  let data = {
    labels: countTechs()
      .filter(
        (tech, index) =>
          tech.tech !==
          countTechs()[
            index + 1 < countTechs().length
              ? index + 1
              : countTechs().length - 1
          ].tech
      )
      .map((techtitle) => {
        return techtitle.tech;
      }),

    datasets: [
      {
        backgroundColor: countTechs().map(
          (techs) =>
            `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256
            )}, 76)`
        ),
        data: countTechs()
          .filter(
            (tech, index) =>
              tech.tech !==
              countTechs()[
                index + 1 < countTechs().length
                  ? index + 1
                  : countTechs().length - 1
              ].tech
          )
          .map((techtitle) => {
            return techtitle.count;
          }),
      },
    ],
  };

  console.log(data);
  return <Pie data={data} />;
};

export default Graph;
