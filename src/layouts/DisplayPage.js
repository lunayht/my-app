import React from 'react';
import '../styles/Page.css';

class DisplayPage extends React.Component{
    render() {
        return(
            <div className='general'>
                <h1>
                    Hi, I'm Display Page.
                </h1>
                <h3>
                    I'll display your name here from form page.
                </h3>
                <h3>
                    Your Name is : 
                </h3>
            </div>
        )
    }
};

export default DisplayPage;