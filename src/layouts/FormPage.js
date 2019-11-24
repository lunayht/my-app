import React from 'react';
import '../styles/Page.css';

class FormPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input_name: ''
        };
        this.handleChangeNameInput = this.handleChangeNameInput.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleChangeNameInput(event) {
        this.setState(
            {
                input_name: event.target.value
            }
        )
    }

    handleSubmitForm() {
        alert('My name is ' + this.state.input_name)
    }

    render() {
        return(
            <div className='general'>
                <h1>
                    Hello, I'm Form Page.
                </h1>
                <h3>Please fill in your name.</h3>
                <input value={this.state.input_name} onChange={this.handleChangeNameInput} type="text" name="name" />
                <button className='formpage_submit_button' onClick={this.handleSubmitForm}>SUBMIT</button>
                <h3>
                    This is my name: {this.state.input_name.toUpperCase()}
                </h3>
            </div>
        )
    }
};

export default FormPage;