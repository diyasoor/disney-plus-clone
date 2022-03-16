import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { auth, provider } from "../firebase";
// import { useHistory } from "react-router-dom"
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin
} from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from 'react-router-dom'

const Header = ()=> {

    const dispatch = useDispatch();
    // const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        
    });

    const handleAuth = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error)=> {
            alert(error.message);
        });
    };

    const setUser = (user)=> {
        dispatch(
            setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt='Disney+'/>
            </Logo> 
            {!userName ? (
                <LoginContainer>
                    <Login onClick={handleAuth}>Login</Login>
                </LoginContainer>
                ) : (
                <>
                    <NavMenu>
                        <a href='/home'>
                            <img src='images/home-icon.svg' alt=''/>
                            <span>HOME</span>
                        </a>

                        <a>
                            <img src='images/search-icon.svg' alt=''/>
                            <span>SEARCH</span>
                        </a>

                        <a>
                            <img src='images/watchlist-icon.svg' alt=''/>
                            <span>WATCHLIST</span>
                        </a>

                        <a>
                            <img src='images/original-icon.svg' alt=''/>
                            <span>ORIGINALS</span>
                        </a>

                        <a>
                            <img src='images/movie-icon.svg' alt=''/>
                            <span>MOVIES</span>
                        </a>

                        <a>
                            <img src='images/series-icon.svg' alt=''/>
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <UserImg src={userPhoto} alt={userName}/>
                </> 
            )}
        </Nav>
    );
};

const Nav = styled.nav`
    height: 70px;
    ${'' /* position: fixed; */}
    top: 0;
    left: 0;
    right: 0;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;   
    letter-spacing: 16px;
    z-index: 3;
    overflow-x: hidden;
`;

const Logo = styled.a`
    width: 80px;
    padding: 0;
    margin-top: 4px;
    max-height: 70px;
    cursor: pointer;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div` 
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    flex-flow: row nowrap;
    height: 100%;
    position: relative;
    margin-right: auto;
    
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
            margin-right: 7px;
            z-index: auto;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            color: rgb(249, 249, 249);
            position: relative;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;

            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                content: ""; 
                height: 2px;
                left: 0px;
                right: 0px;
                bottom: -6px;
                background: white;
                position: absolute;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                opacity: 1 !important;
                transform: scaleX(1);
                visibility: visible;
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const UserImg = styled.img` 
    height: 100%;
    width: 48px;
    border-radius: 50%;
    cursor: pointer;
`;

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: all 0.2s ease 0s;

    &:hover {
        color: #000;
        background-color: #f9f9f9;
        border-color: transparent;
    }
`;

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;


export default Header
