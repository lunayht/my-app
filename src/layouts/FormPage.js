import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/Page.css';
import * as crudAction from '../actions/crudAction';

class FormPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input_name: ''
        };
        this.handleChangeNameInput = this.handleChangeNameInput.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChangeNameInput(event) {
        this.setState({
            input_name: event.target.value
        })
        this.props.actions.dispatch_fill_in_action(event.target.value)
    }

    handleSubmitForm() {
        alert('My name is ' + this.state.input_name)
    }

    handleClear() {
        this.setState({
            input_name: ''
        })
        this.props.actions.dispatch_clear_input_action()
    }

    render() {
        return(
            <div className='general'>
                <h1>
                    Hello, I'm Form Page.
                </h1>
                <h3>
                    Please fill in your name.
                </h3>
                <input value={this.state.input_name} onChange={this.handleChangeNameInput} type="text" name="name" />
                <div className='formpage_buttons_div'>
                    <button className='formpage_button' onClick={this.handleSubmitForm}>
                        SUBMIT
                    </button>
                    <button className='formpage_button' onClick={this.handleClear}>
                        CLEAR
                    </button>
                </div>
                <h3>
                    This is my name: {this.state.input_name.toUpperCase()}
                </h3>
            </div>
        )
    }
};

// function mapStateToProps(state) {
//     return { state }
// };

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, crudAction), dispatch)
});

export default connect(null, mapDispatchToProps)(FormPage);