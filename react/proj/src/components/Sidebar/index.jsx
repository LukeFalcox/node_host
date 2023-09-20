import {Link} from 'react-router-dom'
import React, { useState } from "react";
import { Container, Content } from "./styles";
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

import SidebarItem from "../SidebarItem";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
      <Link to='/'>
        <SidebarItem Icon={FaHome} Text="Home" />
      </Link>
      <Link to='/NovoProjeto'>
        <SidebarItem Icon={FaChartBar} Text="Tranferencia" />
      </Link>
      <Link to='/Project'>
        <SidebarItem Icon={FaChartBar} Text="Extrato" />
      </Link>
        <Link to='/Empresa'>
        <SidebarItem Icon={FaIdCardAlt} Text="Sobre Nós" />
        </Link> 
      
      </Content>
    </Container>
  );
};
export default Sidebar;
