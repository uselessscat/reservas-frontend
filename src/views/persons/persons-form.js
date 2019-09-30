import React from 'react';

export default function PersonsForm(props) {
    return (
        <form onSubmit={props.onSubmit} >
            <div className='row form-group'>
                <div className='col-4'>
                    <label htmlFor='name'>Nombre</label>
                    <input type='name' className='form-control' id='name' name='name'
                        value={props.person.name} onChange={props.onChange} />
                </div>
                <div className='col-4'>
                    <label htmlFor='last_name'>Apellido</label>
                    <input type='last_name' className='form-control' id='last_name' name='last_name'
                        value={props.person.last_name} onChange={props.onChange} />
                </div>
                <div className='col-4'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control' id='email' name='email'
                        value={props.person.email} onChange={props.onChange} />
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
