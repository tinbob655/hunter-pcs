import React, {Component} from 'react';
import { isMobile } from '../../../../index.js';
import EmailPopup from '../../../multiPageComponents/popups/email/emailPopup.jsx';

//ss values are: customPcSpec address email

class CustomPcPurchaseSucsessful extends Component {

    constructor(props) {
        super(props);

        this.state = {
            emailPopup: <></>,
        };
    };

    componentDidMount() {

        //will fire when a custom pc purchase was made sucsessfully send the message to discord
        //only go once to prevent firing 2 times if the user refreshes
        if (sessionStorage.getItem('purchaseValid') === 'true') {
            sessionStorage.removeItem('purchaseValid');

            //get the purchase information
            const customPcSpec = sessionStorage.getItem('customPcSpec');
            const address = sessionStorage.getItem('address');
            const email = sessionStorage.getItem('email');
    
            //create a discord webhook session
            const request = new XMLHttpRequest();
            request.open("POST", "https://discord.com/api/webhooks/1187071870407807027/RKqIEOQhwxXsrBMmL_SCqpuIlbSZvvmn4YJ-kypWkp4aT6x289XF7GMVbItLz4-Ja9eS");
            
            //define the data being sent to the discord bot
            request.setRequestHeader('Content-Type', 'application/json');
            const messageJSON = {
                content: `New purchase of a CUSTOM PC with the following information:\n
                Custom PC spec: ${JSON.stringify(customPcSpec)}\n
                Delivery address: ${address}\n
                Email: ${email}`,
            };
            
            //send the message
            request.send(JSON.stringify(messageJSON));
        };
    };

    render() {

        //desktop custom pc purchase sucsessful page
        if (!isMobile()) {
            return (
                <React.Fragment>
                    <h1 className="alignRight">
                        Congratulations!
                    </h1>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <img src='https://firebasestorage.googleapis.com/v0/b/hunter-pcs-firebase.appspot.com/o/images%2FgamingSetupWIDE2.jpeg?alt=media&token=f45440e7-bb17-4e56-9213-6bb178ed49dfhttps://firebasestorage.googleapis.com/v0/b/hunter-pcs-firebase.appspot.com/o/images%2FgamingSetupWIDE2.jpeg?alt=media&token=f45440e7-bb17-4e56-9213-6bb178ed49df'
                                    className="mainImage centered" alt='loading...' />
                                </td>
                                <td>
                                    <h2 className="alignRight">
                                        Your purchase is being processed
                                    </h2>
                                    <p className="alignLeft">
                                    We've recieved your purchase and are now processing it. We will check that the parts work together and email you
                                    at {sessionStorage.getItem('email')} with the results and our billing information.
                                    </p>
                                    <button type="button" onClick={() => {this.setState({emailPopup: <EmailPopup/>})}}>
                                        <h3 style={{maxWidth: '50%', margin: 'auto', color: 'red'}}>
                                            If the above email is not correct, then click here to do something about that ASAP
                                        </h3>
                                    </button>
                                </td>
                            </tr>
                        </thead>
                    </table>

                    <div id="emailPopupWrapper" className="popupWrapper">
                        {this.state.emailPopup}
                    </div>
                </React.Fragment>
            );
        }

        //mobile custom pc purchase sucsessful page
        else {
            return (
                <React.Fragment>
                    <h1>
                        Congratulations!
                    </h1>
                    <table>
                        <thead>
                            <tr>
                                <td style={{width: '60%'}}>
                                    <img src='https://firebasestorage.googleapis.com/v0/b/hunter-pcs-firebase.appspot.com/o/images%2FgamingSetupWIDE2.jpeg?alt=media&token=f45440e7-bb17-4e56-9213-6bb178ed49dfhttps://firebasestorage.googleapis.com/v0/b/hunter-pcs-firebase.appspot.com/o/images%2FgamingSetupWIDE2.jpeg?alt=media&token=f45440e7-bb17-4e56-9213-6bb178ed49df'
                                    className="mainImage centered" alt="loading..." />
                                </td>
                                <td>
                                    <h2 className="alignLeft">
                                        Your purchase is being processed
                                    </h2>
                                </td>
                            </tr>
                        </thead>
                    </table>
                    <p>
                    We've recieved your purchase and are now processing it. We will check that the parts work together and email you
                        at {sessionStorage.getItem('email')} with the results and our billing information. 
                    </p>
                    <button type="button" onClick={() => {this.setState({emailPopup: <EmailPopup/>})}}>
                        <h3 style={{maxWidth: '50%', margin: 'auto', color: 'red'}}>
                            If the above email is not correct, then click here to do something about that ASAP
                        </h3>
                    </button>

                    <div id="emailPopupWrapper" className="popupWrapper">
                        {this.state.emailPopup}
                    </div>
                </React.Fragment>
            );
        };
    };
};

export default CustomPcPurchaseSucsessful;