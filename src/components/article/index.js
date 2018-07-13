import React, { Component } from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import './index.css';

const b = b_.with('article');
const btn = b_.with('button');

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };
    }

    handleClick(evt) {
        evt.preventDefault();
        this.setState({ visible: !this.state.visible });
    }

    render() {
        const { author, preview, text } = this.props.data;

        return (
            <article className={b()}>
                <header className={b('header')}>
                    <div>
                        <h3 className={b('title')}>{author}</h3>
                        <p>{preview}</p>
                    </div>
                    <button
                        type='button'
                        className={`${btn()} ${b('toggle', { open: this.state.visible ? 'on' : 'off' })}`}
                        onClick={e => this.handleClick(e)}
                    >
                        {this.state.visible ? 'Close' : 'More info'}
                    </button>
                </header>
                <div className={this.state.visible ? b('text') : 'none'}>{text}</div>
            </article>
        );
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }),
};

export default Article;
