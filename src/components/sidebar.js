import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap';


const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader>
          <Button variant="primary">New Podcast</Button>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/previous">
              <CDBSidebarMenuItem icon="newspaper">previous 10-03-2022</CDBSidebarMenuItem>
            </NavLink>
        
           
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>

              <CDBSidebarMenuItem icon="trash">clear</CDBSidebarMenuItem>
   

              <CDBSidebarMenuItem icon="arrow-right">Log out</CDBSidebarMenuItem>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
