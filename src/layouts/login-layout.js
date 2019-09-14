import React from 'react';

export default class Login extends React.Component {
    componentDidMount() {
        document.body.classList.add('bg-gradient-primary');
    }

    render() {
        return (
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}