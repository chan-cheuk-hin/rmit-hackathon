import React from 'react';
import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import LoginPage, { Reset, Logo, Password, Footer } from '@react-login-page/base';

const Login = () => {
    
    return (
        <LoginPage>
            <Logo visible={false}/>
            <Footer>
            Not a member? <a href="#">Sign up now</a>
            </Footer>
        </LoginPage>
    );
};
export default Login;