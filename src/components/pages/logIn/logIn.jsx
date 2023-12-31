import React, {Component} from 'react';
import {isMobile} from '../../../index.js';
import LoginPopup from '../../multiPageComponents/popups/login/loginPopup.jsx';
import './logInStyles.scss';

class LogIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginPopup: <></>,
        };
    };

    componentDidMount() {

        //only show the page content if the user is logged in, if not, fade the page content and show a popup
        if (sessionStorage.getItem('loggedIn') == 'true') {

            //show the fade the page content

            const elements = ['footer', 'logInPage', 'logInPageLogInPopupWrapper'];
            elements.forEach((element) => {
                document.getElementById(element).style.opacity = 0.25;
            });

            //show the popup
            document.getElementById('alreadyLoggedInMessage').classList.add('shown');
        };
    };

    render() {

        //desktop log in page
        if (!isMobile()) {
            return (
                <React.Fragment>
                    <div id="logInPage">
                        <h1 className="alignRight">
                            Make your Hunter PCs account
                        </h1>
                        <table>
                            <thead>
                                <tr>
                                    <td>
                                        <img src='https://firebasestorage.googleapis.com/v0/b/hunter-pcs-firebase.appspot.com/o/images%2FgamingSetup1.jpeg?alt=media&token=b3e93b9f-2e13-4fa1-8442-cc05918e2b14'
                                        alt="loading..." className="mainImage centered"/>
                                    </td>
                                    <td>
                                        <h2 className="alignRight">
                                            Get the best out of Hunter PCs
                                        </h2>
                                        <p>
                                            Making an account, or logging back into your existing account allows you to save products to your basket and make purchases right here
                                        </p>
                                        <button onClick={() => {this.logInButtonClicked()}} type="button">
                                            <h3>
                                                Log In or Sign Up ⟶
                                            </h3>
                                        </button>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div id="logInPageLogInPopupWrapper">
                        {this.state.loginPopup}
                    </div>

                    <div id="alreadyLoggedInMessage">
                        <h2 style={{color: '#7d2323'}}>
                            You are already logged into your Hunter PCs account!
                        </h2>
                    </div>
                </React.Fragment>
            );
        }

        //mobile log in page
        else {
            return (
                <React.Fragment>
                    <div id="logInPage">
                        <h1>
                            Make your Hunter PCs account
                        </h1>
                        <table>
                            <thead>
                                <tr>
                                    <td style={{width: '60%'}}>
                                        <img src='https://firebasestorage.googleapis.com/v0/b/hunter-pcs-firebase.appspot.com/o/images%2FgamingSetup1.jpeg?alt=media&token=b3e93b9f-2e13-4fa1-8442-cc05918e2b14'
                                        alt="loading..." className="mainImage centered"/>
                                    </td>
                                    <td>
                                        <h2 className="alignLeft">
                                            Get the best out of Hunter PCs
                                        </h2>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                        <p>
                            Making an account, or logging back into your existing account allows you to save products to your basket and make purchases right here
                        </p>
                        <button onClick={() => {this.logInButtonClicked()}} type="button">
                            <h3>
                                Log In or Sign Up ⟶
                            </h3>
                        </button>
                    </div>

                    <div id="logInPageLogInPopupWrapper">
                        {this.state.loginPopup}
                    </div>

                    <div id="alreadyLoggedInMessage">
                        <h2 style={{color: '#7d2323'}}>
                            You are already logged into your Hunter PCs account!
                        </h2>
                    </div>
                </React.Fragment>
            );
        };
    };

    logInButtonClicked() {

        //make sure the page is not disabled
        if (sessionStorage.getItem('loggedIn') != 'true') {
            //show the login popup
            this.setState({loginPopup: <LoginPopup />});
    
            //fade the rest of the page
            document.getElementById('logInPage').style.opacity = 0.25;
            document.getElementById('footer').style.opacity = 0.25
        };

    };
};

export default LogIn;