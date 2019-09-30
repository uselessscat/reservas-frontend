import React from 'react';

export default function RolesForm(props) {
    return (
        <form onSubmit={props.onSubmit} >
            <div className='row form-group'>
                <div className='col-4'>
                    <label htmlFor='name'>Nombre</label>
                    <input type='name' className='form-control' id='name' name='name'
                        value={props.role.name} onChange={props.onChange} />
                </div>
            </div>
            <div className='row form-group'>
                <div className='col-12'>
                    <input className='btn btn-primary' type='submit' value='Guardar' />
                </div>
            </div>
        </form>
    )
}
