import React from 'react';
import b_ from 'b_';
import './index.css';

const b = b_.with('main');

function Main() {
    return (
        <div className={b()}>
            <header className={b('header')}>
                <h1 className={b('title')}>Sample SPA to React</h1>
            </header>
            <p className={b('welcom')}>
                Welcom! :)
            </p>
        </div>
    );
}

export default Main;
