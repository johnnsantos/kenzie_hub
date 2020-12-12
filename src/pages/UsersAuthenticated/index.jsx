import DisplayDev from "../../components/DisplayDev";
import { NewTextField, SearchContainer } from "./style";
import { Search } from "@material-ui/icons";
import { useState } from "react";
import { useSelector } from "react-redux";

const UsersAuthenticated = () => {
  const [search, setSearch] = useState("");
  const [searchDevs, setDevs] = useState();

  const { devs } = useSelector((state) => state.Users);
  const handleSearch = (e) => {
    const data = e.target.value.toLowerCase();
    setSearch(data);
    setDevs({
      devs: devs.filter((dev) => dev.name.toLowerCase().includes(data)),
    });
  };

  return (
    <>
      <SearchContainer value={search} onChange={handleSearch}>
        <Search />
        <NewTextField />
      </SearchContainer>
      <DisplayDev search={searchDevs} />;
    </>
  );
};

export default UsersAuthenticated;
