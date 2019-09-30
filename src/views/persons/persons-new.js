import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../routing/routes';
import PersonsForm from './persons-form';

import ReservationsApi from '../../clases/api/reservations/reservations';

class NewPersons extends React.Component {
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
            <>
                <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h1 className='h3 mb-0 text-gray-800'>Ingresar persona</h1>
                    <Link to={routes.persons.path} className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
                        Volver
                    </Link>
                </div>
                <div className='card shadow mb-4'>
                    <div className='card-header py-3'>
                        <h6 className='m-0 font-weight-bold text-primary'>Datos de la persona</h6>
                    </div>
                    <div className='card-body'>
                        <PersonsForm person={this.state.person} onChange={this.handleChange} onSubmit={this.handleSubmit} />
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPersons);
