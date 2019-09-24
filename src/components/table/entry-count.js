import React from 'react';

export default function EntryCount(props) {
    return (
        <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">
            Showing {props.from} to {props.to} of {props.total} entries
        </div>
    )
}