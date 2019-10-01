import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../routing/routes';
import Table from '../../components/table/table';

import ReservationsApi from '../../clases/api/reservations/reservations';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Roles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            roles: []
        }
    }

    componentDidMount() {
        ReservationsApi.Roles.list(response => {
            this.setState({
                roles: response.data
            })
        });
    }

    render() {
        const rolesBody = (this.state.roles.length > 0) ? this.state.roles.map((element, index) => {
            return (
                <tr key={index}>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                </tr>
            )
        }) : <tr><td colSpan='3'>Loading…</td></tr>

        return (
            <>
                <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h1 className='h3 mb-0 text-gray-800'>Roles</h1>
                    <Link to={routes.rolesNew.path} className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
                        <FontAwesomeIcon icon={'plus'} /> Ingresar roles
                    </Link>
                </div>
                <div className='card shadow mb-4'>
                    <div className='card-header py-3'>
                        <h6 className='m-0 font-weight-bold text-primary'>Registros</h6>
                    </div>
                    <div className='card-body'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rolesBody}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Roles);
