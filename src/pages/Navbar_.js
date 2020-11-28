import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar_.css';
import { IconContext } from 'react-icons';
import { Nav, Navbar, Form, Button } from 'react-bootstrap'

function Navbar_() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
            <Navbar.Brand href="/" style={{marginLeft:15, margintop: 20, color:'white'}}><b>Stone Manager</b></Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
                <Button href='myPage' variant="outline-light">마이페이지</Button>
                &nbsp;&nbsp;
                <Button variant="outline-light">로그아웃</Button>
            </Form>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose style={{width:50, fontSize:20}}/>
              </Link>
            </li>
            <div className='project-info' style={{color:"white", marginLeft:25}}>
              <h2> 쏘꽁 </h2>
              <h4> 소프트웨어공학개론 </h4>
              <h4> 최은만 교수님</h4>
            </div>
            <hr />
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar_;