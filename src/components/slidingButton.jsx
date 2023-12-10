import React from 'react';
import { buttonExpand, changePage } from '../index.js';
import { isMobile } from '../index.js';

function SlidingButton({id, imgSrc, linkLocation, textContent, ssIndex, ssValue}) {
    return(
        <React.Fragment>
            <button id={id+'button'} type="button" className="linkButton"

                onMouseOver={function() {buttonExpand(id)}}
                onClick={function() {ssValue ? (sessionStorage.setItem(ssIndex, ssValue)) : console.log('No value to store in session storage');
                if (isMobile()) {
                    setTimeout(() => {
                        changePage(linkLocation);
                    }, 1500);
                }
                else {
                    changePage(linkLocation);
                }}}
                    >

                    <h2 id={id+'title'} className="linkButtonTitle">
                        {textContent}
                    </h2>

                    <div className="linkButtonDivider" id={id+'divider'} ></div>

                    <img src={imgSrc} alt="loading..."
                    style={isMobile() ? {width: '30%', height: 'auto'} : {width: '25%', height: 'auto'}} className="centered"/>
                </button>
        </React.Fragment>
    );
};

export default SlidingButton;