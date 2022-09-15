import React, { useState, Fragment } from 'react';
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {NavbarToggler, Nav, NavItem, NavLink, Col, Collapse, Navbar} from 'reactstrap'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home: NextPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <Fragment>
      <div id="header">
          <Nav justified className={styles.headerTop}>
            <Col md="4" xs="2" className={styles.martop}>
              <NavItem style={{position: 'relative', textAlign: 'left'}}>
                <NavLink className={`${styles.navLink} d-md-block d-none`}>
                  <a href='#' className={styles.search}>
                    <FontAwesomeIcon icon={faSearch} />
                  </a>
                </NavLink>
                <NavbarToggler onClick={handleToggle} className={`d-block d-md-none`} style={{left:"0", top: "-20px",position: "absolute", border:"0", boxShadow:"none"}}/>
                <div id="close-icon" className={`${isOpen ? "open" : ""} d-sm-block d-xs-block d-md-none`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
              </NavItem>
            </Col>
            <Col md="4" xs="8" className={styles.martop}>
              <NavItem style={{position: 'relative', textAlign: 'center'}}>
                <NavLink className={styles.navLink} style={{color:'#fff'}}>
                  Ridho Azhar
                </NavLink>
              </NavItem>
            </Col>
            <Col md="4" xs="2" className={styles.martop}>
              <NavItem style={{position: 'relative', textAlign: 'right'}}>
                <NavLink className={`${styles.navLink} d-md-block d-none`}>
                  <a href='#' className={`${styles.subscribe}`} >
                    Subscribe
                  </a>
                </NavLink>
                <NavLink className={`${styles.navLink} d-md-none d-block`}>
                  <a href='#' className={`${styles.search}`}>
                    <FontAwesomeIcon icon={faSearch} />
                  </a>
                </NavLink>
              </NavItem>
            </Col>
          </Nav>
          
          <Collapse isOpen={isOpen} navbar>
            <Nav justified className={styles.headerBottom} >
              <NavItem style={{position: 'relative'}}>
                <NavLink className={styles.whiteColor}>
                  <a href="#" className={styles.navLink}>
                    Podcast
                  </a>
                </NavLink>
              </NavItem>
              <NavItem style={{position: 'relative'}}>
                <NavLink className={styles.whiteColor}>
                  <a href="#" className={styles.navLink}>
                    Newsletter
                  </a>
                </NavLink>
              </NavItem><NavItem style={{position: 'relative'}}>
                <NavLink className={styles.whiteColor}>
                  <a href="#" className={styles.navLink}>
                    Topics & Tags
                  </a>
                </NavLink>
              </NavItem><NavItem style={{position: 'relative'}}>
                <NavLink className={styles.whiteColor}>
                  <a href="#" className={styles.navLink}>
                    More
                  </a>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </div>
    </Fragment>
  )
}

export default Home
