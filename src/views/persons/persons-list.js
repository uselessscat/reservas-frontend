import React from 'react';
import { connect } from 'react-redux';

import { ButtonGroup, Button } from 'react-bootstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import routes from '../../routing/routes';
import ReservationsApi from '../../clases/api/reservations/reservations';

import BasicCrud from '../../components/crud/basic-crud';


const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
        filter: textFilter({
            defaultValue: ''
        }),
    },
    {
        dataField: 'name',
        text: 'Nombre',
        sort: true,
        filter: textFilter({
            defaultValue: ''
        }),
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true,
        filter: textFilter({
            defaultValue: ''
        }),
    },
    {
        dataField: 'actions',
        text: 'Accciones',
        sort: true
    }
];

const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}];

const cellEditProps = {
  mode: 'click'
};

class PersonsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pagination: {
              per_page:25
          },
          data: [],
          tableEvents: {
              'pagination': this.handleTablePagination,
              'cellEdit': this.handleTableCellEdit,
              'sort': this.handleTableSort,
              'filter': this.handleTableFilter,
          }
        };
        
        this.handleTableChange = this.handleTableChange.bind(this);
    }
    
    componentDidMount() {
        this.fireDataUpdate();
    }
    
    handleTablePagination = (...params) => {
        
        console.log('function table pagination called', params);  
        this.setState({
                pagination: {
                    page: params.page,
                    per_page:params.sizePerPage,
                }
            });
            
        this.fireDataUpdate();
    }
    
    handleTableCellEdit = (...params) => {
        console.log('function table cellEdit called', params);  
    };
    
    handleTableSort = (...params) => {
        console.log('function table cellEdit called', params);  
    };
    
    handleTableFilter = (...params) => {
        console.log('function table filter called', params);  
    };
    
    fireDataUpdate() {
        console.log('Updating data...');

        ReservationsApi.Persons.list(this.state.pagination, response => {
            console.log(response);
            const data = response.data;

            data.data.forEach(element => {
                element.actions = (
                    <>
                    <ButtonGroup>
                        <Button variant="outline-danger">
                            <FontAwesomeIcon icon='trash' />
                        </Button>
                    </ButtonGroup>
                    </>
                )
            });

            this.setState({
                data: data.data,
                pagination: {
                    page: data.current_page,
                    from: data.from,
                    to: data.to,
                    pages: data.last_page,
                    total: data.total
                }
            })
        });
    }

    render() {
       
        return (
            <BasicCrud
                title='Personas'
                newTitle='Ingresar persona'
                newLink={routes.personsNew.path}
                table={{
                    keyField: 'id',
                    data: this.state.data,
                    defaultSorted: defaultSorted,
                    columns: columns,
                    cellEdit:cellEditFactory(cellEditProps),
                    filter:filterFactory(),
                    pagination: paginationFactory({ 
                        page: this.state.pagination.page,
                        sizePerPage: this.state.pagination.per_page, 
                        totalSize: this.state.pagination.total, 
                    }),
                    onTableChange: this.handleTableChange
                }}
            />
        );
    }

    handleTableChange = (type, { page, sizePerPage, filters, sortField, sortOrder, cellEdit }) => {
        console.log("table change type" , type);
        this.state.tableEvents[type]({page, sizePerPage, filters, sortField, sortOrder, cellEdit});
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonsList);