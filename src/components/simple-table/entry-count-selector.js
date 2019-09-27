import React from 'react';

export default class EntryCountSelector extends React.Component {
    render() {
        const options = this.props.options.map((e, i) => {
            return <option key={i} value={e}>{e}</option>
        });

        return (<label className='d-inline-flex'>
            <span className='mr-2'>Show </span>
            <select className='custom-select custom-select-sm form-control form-control-sm' defaultValue={this.props.selected}>
                {options}
            </select>
            <span className='ml-2'>entries</span>
        </label>
        )
    }
}