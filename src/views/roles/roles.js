import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../routing/routes';
import RoleForm from './roleForm';

import ReservationsApi from '../../clases/api/reservations/reservations';

class Role extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            person: {
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
            <>
                <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h1 className='h3 mb-0 text-gray-800'>Ingresar rol</h1>
                    <Link to={routes.persons.path} className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
                        Volver
                    </Link>
                </div>
                <div className='card shadow mb-4'>
                    <div className='card-header py-3'>
                        <h6 className='m-0 font-weight-bold text-primary'>Datos del rol</h6>
                    </div>
                    <div className='card-body'>
                        <RoleForm role={this.state.role} onChange={this.handleChange} onSubmit={this.handleSubmit} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Role);
