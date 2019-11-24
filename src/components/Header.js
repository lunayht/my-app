import React from 'react';
import '../styles/Header.css';
import history from '../utils/history';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.handleClickFormPage = this.handleClickFormPage.bind(this);
        this.handleClickDisplayPage = this.handleClickDisplayPage.bind(this);
    }

    handleClickFormPage() {
        history.push('/')
    }

    handleClickDisplayPage() {
        history.push('/display')
    }

    render() {
        return(
            <div className='header'>
                <button className='button' onClick={this.handleClickFormPage}>FORM PAGE</button>
                <button className='button' onClick={this.handleClickDisplayPage}>DISPLAY PAGE</button>
            </div>
        )
    }
};

export default Header;