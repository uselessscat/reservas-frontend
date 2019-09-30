import React from 'react';
import ReservationsApi from '../../clases/api/reservations/reservations';

export default class RoleForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            role: {
                name: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.state.id !== undefined) {
            ReservationsApi.Roles.get(this.state.id, response => {
                this.setState({
                    role: response.data
                })
            });
        }
    }

    handleSubmit(event) {
        if (this.state.id === undefined) {
            ReservationsApi.Roles.store(this.state.role, response => {
                this.setState({
                    id: response.data.id,
                    role: response.data
                })
            });
        } else {
            ReservationsApi.Roles.update(this.state.id, this.state.role, response => {
                this.setState({
                    id: response.data.id,
                    role: response.data
                })
            });
        }

        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target.name;
        const value = event.target.value;

        this.setState(prevState => {
            return {
                role: {
                    ...prevState.role,
                    [target]: value
                }
            };
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='row form-group'>
                    <div className='col-4'>
                        <label htmlFor='name'>Nombre</label>
                        <input type='name' className='form-control' id='name' name='name'
                            value={this.state.role.name} onChange={this.handleChange} />
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
}
