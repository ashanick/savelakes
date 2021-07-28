import React from 'react'
import {FloatBarContainer, Icon, CloseIcon,
    FloatBarWrapper, FloatBarMenu, FloatBarLink } from './FloatBarElements'

const FloatBar = ({isOpen, toggle}) => {
    return (
        <FloatBarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <FloatBarWrapper>
                <FloatBarMenu>
                    <FloatBarLink>
                        About
                    </FloatBarLink>
                </FloatBarMenu>
            </FloatBarWrapper>
        </FloatBarContainer>
    )
}

export default FloatBar
