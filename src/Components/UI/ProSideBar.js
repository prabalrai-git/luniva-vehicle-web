import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-pro-sidebar/dist/css/styles.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { navData } from '../../Helpers/NavData';
import PerfectScrollbar from 'react-perfect-scrollbar'

const ProSide = () => {

    return (
        <SideBarContainer>
            <ProSidebar collapsed={false} width={250}>
                {/* breakPoint={'sm'} */}
                <SidebarHeader>
                    <h2>Luniva360</h2>
                </SidebarHeader>
                <PerfectScrollbar>
                    <SidebarContent>
                        <Menu iconShape="square">
                            {
                                navData.map((e, index) => (
                                    <>
                                        {
                                            e.hasSubMenu ?
                                                <SubMenu icon={<e.icon />} key={index} title={e.name}>
                                                    {
                                                        e.subData.map((subE, subIndex) => (
                                                            <MenuItem key={subE.id} icon={<subE.icon />}>
                                                                <NavLink className={`sideBarItem`} key={subIndex} to={`/admin${e.id === 3 ? '/reports' : ''}${subE.pathname}`}>
                                                                    <span>{subE.name}</span>
                                                                </NavLink>
                                                            </MenuItem>
                                                        ))
                                                    }
                                                </SubMenu>
                                                :
                                                <MenuItem key={index} icon={<e.icon />}>
                                                    <NavLink className={`sideBarItem`} key={index} to={`/admin${e.pathname}`}>
                                                        <span>{e.name}</span>
                                                    </NavLink>
                                                </MenuItem>
                                        }
                                    </>
                                ))
                            }
                        </Menu>
                    </SidebarContent>
                </PerfectScrollbar>
                <SidebarFooter>
                    &copy;
                </SidebarFooter>
            </ProSidebar>
        </SideBarContainer>
    )
}
export default ProSide

const SideBarContainer = styled.div`
    .pro-sidebar {
        height: 100%;
        position: fixed;
    }
    
    .pro-sidebar, .pro-sidebar .pro-menu a, h2 {
        text-decoration: none;
        color: rgb(254, 254, 254);
    }

    .pro-sidebar .pro-menu.square .pro-menu-item > .pro-inner-item > .pro-icon-wrapper {
        border-radius: 25px;
    }
`