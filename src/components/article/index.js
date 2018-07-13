import React, { Component } from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
// import './index.css';

const b = b_.with('article');

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };
    }

    handleClick(evt) {
        evt.preventDefault();
        this.setState({ visible: true });
    }

    render() {
        const { author, preview, text } = this.props.data;

        return (
            <article className={b()}>
                <h3>{author}</h3>
                <p>{preview}</p>
                <button
                    type='button'
                    className={this.state.visible ? 'none' : ''}
                    onClick={e => this.handleClick(e)}
                >
                    More info
                </button>
                <p className={this.state.visible ? '' : 'none'}>{text}</p>
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
