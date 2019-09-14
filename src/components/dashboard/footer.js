import React from 'react';

export default function Footer(props) {
    return (
        <footer className='sticky-footer bg-white'>
            <div className='container my-auto'>
                {props.children}
            </div>
        </footer>
    )
}