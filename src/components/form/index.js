import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import './index.css';

const b = b_.with('form');
const btn = b_.with('button');

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
        this.author.current.value = '';
        this.preview.current.value = '';
        this.text.current.value = '';
        this.checkbox.current.checked = false;
        this.setState({
            agreeNotChecked: true,
        });
    }

    render() {
        const { agreeNotChecked, authorIsEmpty, textIsEmpty } = this.state;

        return (
            <form className={b()}>
                <label className={b('field')}>
                    Author:
                    <input
                        className={b('input')}
                        type='text'
                        placeholder='input author'
                        ref={this.author}
                        onChange={e => this.onFieldChange(e, 'authorIsEmpty')}
                    />
                </label>
                <label className={b('field')}>
                    Preview news:
                    <input
                        className={b('input')}
                        type='text'
                        placeholder='input preview'
                        ref={this.preview}
                        onChange={e => this.onFieldChange(e, 'previewIsEmpty')}
                    />
                </label>
                <label className={b('field')}>
                    Text news:
                    <textarea
                        className={b('input')}
                        placeholder='input text'
                        ref={this.text}
                        onChange={e => this.onFieldChange(e, 'textIsEmpty')}
                    />
                </label>
                <label className={`${b('field', { big: true })}`}>
                    <input
                        type='checkbox'
                        hidden
                        ref={this.checkbox}
                        onClick={e => this.onCheckRule(e)}
                    />
                    <span className={b('checkbox')}>I agree with the rules</span>
                </label>
                <button
                    className={`${btn()} ${b('submit')}`}
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
