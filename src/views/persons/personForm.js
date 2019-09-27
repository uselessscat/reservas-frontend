import React from 'react';
import ReservationsApi from '../../clases/api/resevations';

export default class PersonForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            person: {
                name: '',
                last_name: '',
                email: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.state.id !== undefined) {
            ReservationsApi.Persons.get(this.state.id, response => {
                this.setState({
                    person: response.data
                })
            });
        }
    }

    handleSubmit(event) {
        if (this.state.id === undefined) {
            ReservationsApi.Persons.store(this.state.person, response => {
                this.setState({
                    id: response.data.id,
                    person: response.data
                })
            });
        } else {
            ReservationsApi.Persons.update(this.state.id, this.state.person, response => {
                this.setState({
                    id: response.data.id,
                    person: response.data
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
                person: {
                    ...prevState.person,
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
                            value={this.state.person.name} onChange={this.handleChange} />
                    </div>
                    <div className='col-4'>
                        <label htmlFor='last_name'>Apellido</label>
                        <input type='last_name' className='form-control' id='last_name' name='last_name'
                            value={this.state.person.last_name} onChange={this.handleChange} />
                    </div>
                    <div className='col-4'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' className='form-control' id='email' name='email'
                            value={this.state.person.email} onChange={this.handleChange} />
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