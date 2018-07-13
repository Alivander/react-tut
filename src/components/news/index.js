import React from 'react';
import PropTypes from 'prop-types';
import b_ from 'b_';
import Article from '../article';
import './index.css';

const b = b_.with('news');

function News(props) {
    let list;

    if (props.data.length > 0) {
        list = props.data.map((currentNew, i) => {
            const item = (
                <li key={i} className={b('item')}>
                    <Article data={currentNew} />
                </li>
            );

            return item;
        });
    } else {
        list = <li>Новостей пока нет</li>;
    }

    return (
        <div className={b()}>
            <ul className={b('list')}>
                {list}
            </ul>
            <p className={props.data.length > 0 ? '' : 'none'}>Всего новостей: {props.data.length}</p>
        </div>
    );
}

News.propTypes = {
    data: PropTypes.array.isRequired,
};

export default News;
