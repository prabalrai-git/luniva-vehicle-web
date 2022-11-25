import React from 'react'
import styled from 'styled-components'
import CBreadCrumb from '../Components/UI/CBreadCrumb'
import NavBar from '../Components/UI/NavBar'
import ProSide from '../Components/UI/ProSideBar'
// import SideBar from '../Components/UI/SideBar'
import MainRoute from '../Routes/MainRoute'

const index = (props) => {
  return (
    <LayoutMainContainer>
      {/* <SideBar></SideBar> */}
      <ProSide />
      <div className="mainContainer">
        <NavBar />

        <div className="container">
          <CBreadCrumb />
          <MainRoute {...props} />
        </div>

      </div>
    </LayoutMainContainer>
  )
}

export default index

const LayoutMainContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--secondaryBackground);
  display: flex;
  position: relative;

  .mainContainer{
    position: relative;
    left: 250px;
    top: 0;
    bottom: 0;
    right: 0;
    width: calc(100% - 250px);
    min-height: 100vh;    
  }
  .container{
      padding: 16px;
    }
`