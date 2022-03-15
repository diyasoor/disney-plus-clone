import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                  Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
                  As of 03/26/22, the price of Disney+ and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        z-index: -1;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
    }
`

const CTA = styled.div`
    width: 90%;
    margin-bottom: 2vw;
    padding: 80px 40px;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    margin-top: 90px;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
`
const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`

const SignUp = styled.a`
    width: 100%;
    font-weight: bold;
    background-color: #0063e5;
    padding: 17px 0;
    color: #f9f9f9;
    border: 1px solid transparent;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    color: hsla(0, 0%, 95.3%, 1);
    line-height: 1.5;
    margin: 0 0 24px;
`

const CTALogoTwo = styled.img`
    width: 90%;

`