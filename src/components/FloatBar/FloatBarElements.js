import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

export const FloatBarContainer = styled.aside `
    position: fixed;
    z-index; 999;
    width: 100%;
    height: 100%;
    background: #E0FFFF;
    display: grid;
    align-items: center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen ? '100%': '0%')};
    top: ${({isOpen}) => (isOpen ? '0': '-100%')};
`;

export const CloseIcon = styled(FaTimes) `
    color: #fff;
`;

export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2 rem;
    cursor: pointer;
    outline: none;
`;

export const FloatBarWrapper = styled.div `
    color: #fff;
`;

export const FloatBarMenu = styled.ul `
    display: grid;
    grid-template-columns:  1fr;
    grid-template-rows: repeat (6, 80px);
    text-align: center;

    @media-screen and (max-width: 480px) {
        grid-template-rows: (repeat(6, 60px);
    }
`;

export const FloatBarLink = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #1E90FF;
        transition: 0.2s ease-in-out;
    }
`;