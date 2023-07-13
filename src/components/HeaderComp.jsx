import React, { Component } from 'react';

class HeaderComp extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href='www.google.com' className='navbar-brand'>Employee Management System App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComp;