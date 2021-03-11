import React from "react";

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWraper,
    SidebarLink,
    SidebarMenu,
} from "./SideBarStyled";

export const SideBar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWraper>
                <SidebarMenu>
                    <SidebarLink to="portfolio" spy={true} onClick={toggle}>
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to="whyus" spy={true} onClick={toggle}>
                        Why us
                    </SidebarLink>
                    <SidebarLink to="ourservice" onClick={toggle}>
                        Our service
                    </SidebarLink>
                    <SidebarLink to="jobs" onClick={toggle}>
                        Jobs
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWraper>
        </SidebarContainer>
    );
};
