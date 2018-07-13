import React, { Component } from 'react';
import b_ from 'b_';
import Form from '../../components/form';
import News from '../../components/news';
import DataForNews from '../../data';
import './index.css';

const b = b_.with('main');

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: DataForNews,
        };
    }
    addNews(news) {
        this.setState({
            news: this.state.news.slice().concat(news),
        });
    }
    render() {
        return (
            <div className={b()}>
                <header className={b('header')}>
                    <h1 className={b('title')}>Sample SPA to React</h1>
                </header>
                <Form callback={news => this.addNews(news)} />
                <News data={this.state.news} />
            </div>
        );
    }
}

export default Main;
