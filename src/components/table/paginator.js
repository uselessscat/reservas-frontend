import React from 'react';

export default class Paginator extends React.Component {
    render() {
        return (
            <ul className="pagination justify-content-end">
                {['Previous', 1, 2, 3, 4, 5, 6, 'Next'].map((item, index) => {
                    return (
                        <li key={index} className="paginate_button page-item previous">
                            <a href="#" data-dt-idx="0" tabIndex="0" className="page-link">{item}</a>
                        </li>
                    );
                })}
            </ul>
        )
    }
}