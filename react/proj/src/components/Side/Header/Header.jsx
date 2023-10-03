import React, { useState } from "react";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar/SideBar";

const Header = () => {
  const [sidebar, Setsidebar] = useState(false);

  const showSidebar = () => Setsidebar(!sidebar);

  return (
    <Container>
      <FaBars onClick={showSidebar} />
      {sidebar && <Sidebar active={Setsidebar} />}
    </Container>
  );
};

export default Header;
