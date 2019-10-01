import React from 'react';
import Form from 'react-bootstrap/Form';

export default function PaginationSize({ pageSizes = [], pageSize, onChange }) {
    const optionsComponents = pageSizes.map((e, i) => {
        return <option key={i} value={e}>{e}</option>
    });

    return (
        <label className='d-inline-flex'>
            <span className='mr-2'>Mostrar </span>
            <Form.Control as="select" className='custom-select custom-select-sm form-control form-control-sm'
                value={pageSize}
                onChange={onChange}>
                {optionsComponents}
            </Form.Control>
            <span className='ml-2'>resultados</span>
        </label>
    )
}