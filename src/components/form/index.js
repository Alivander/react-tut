import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
// import './index.css';

const b = b_.with('form');

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            agreeNotChecked: true,
            authorIsEmpty: true,
            previewIsEmpty: true,
            textIsEmpty: true,
        };

        this.author = createRef();
        this.preview = createRef();
        this.text = createRef();
        this.checkbox = createRef();
        this.btnSend = createRef();
    }

    componentDidMount() {
        this.author.current.focus();
    }

    onCheckRule(e) {
        this.setState({
            agreeNotChecked: !this.state.agreeNotChecked,
        });
    }

    onFieldChange(e, prop) {
        if (e.target.value.trim().length > 0) {
            this.setState({ [prop]: false });
        } else {
            this.setState({ [prop]: true });
        }
    }

    onBtnClick() {
        this.props.callback({
            author: this.author.current.value,
            preview: this.preview.current.value,
            text: this.text.current.value,
        });
    }

    render() {
        const { agreeNotChecked, authorIsEmpty, textIsEmpty } = this.state;

        return (
            <form className={b()}>
                <label>
                    Author:
                    <input
                        type='text'
                        placeholder='input author'
                        ref={this.author}
                        onChange={e => this.onFieldChange(e, 'authorIsEmpty')}
                    />
                </label>
                <label>
                    Preview news:
                    <input
                        type='text'
                        placeholder='input preview'
                        ref={this.preview}
                        onChange={e => this.onFieldChange(e, 'previewIsEmpty')}
                    />
                </label>
                <label>
                    Text news:
                    <textarea
                        placeholder='input text'
                        ref={this.text}
                        onChange={e => this.onFieldChange(e, 'textIsEmpty')}
                    />
                </label>
                <label>
                    I agree with the rules:
                    <input
                        type='checkbox'
                        ref={this.checkbox}
                        onClick={e => this.onCheckRule(e)}
                    />
                </label>
                <button
                    type='button'
                    ref={this.btnSend}
                    disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
                    onClick={e => this.onBtnClick(e)}
                >
                    Send news
                </button>
            </form>
        );
    }
}

Form.propTypes = {
    callback: PropTypes.func.isRequired,
};

export default Form;
