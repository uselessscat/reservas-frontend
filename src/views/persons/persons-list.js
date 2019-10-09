import React from 'react';
import { connect } from 'react-redux';

import { ButtonGroup, Button } from 'react-bootstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import routes from '../../routing/routes';
import ReservationsApi from '../../clases/api/reservations/reservations';

import BasicCrud from '../../components/crud/basic-crud';

const sortCaret = (order, column) => {
    return (
        <>
            <FontAwesomeIcon icon='arrow-up' className={order == 'desc' ? 'text-dark' : ''} />
            <FontAwesomeIcon icon='arrow-down' className={order == 'asc' ? 'text-dark' : ''} />
        </>
    )
};

const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
        sortCaret,
        filter: textFilter({
            defaultValue: ''
        }),
    },
    {
        dataField: 'name',
        text: 'Nombre',
        sort: true,
        sortCaret,
        filter: textFilter({
            defaultValue: ''
        }),
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true,
        sortCaret,
        filter: textFilter({
            defaultValue: ''
        }),
    },
    {
        dataField: 'actions',
        text: 'Accciones',
        sort: true,
        sortCaret
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
          data: []
        };
        
        this.handleTableChange = this.handleTableChange.bind(this);

    }
    
    componentDidMount() {
        this.fireDataUpdate();
    }

    fireDataUpdate() {
        console.log('Updating data...');

        ReservationsApi.Persons.list(this.state.pagination, response => {
            console.log(response);
            const data = response.data;

            data.data.forEach(element => {
                element.actions = (
                    <>
                    <ButtonGroup>
                        <Button variant="outline-primary">
                            <FontAwesomeIcon icon='pencil-alt' />
                        </Button>
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
    const currentIndex = (page - 1) * sizePerPage;
      // Handle cell editing
      if (type === 'cellEdit') {
          //TODO: CALL TO API - UPDATE
        const { rowId, dataField, newValue } = cellEdit;
        this.state.data = this.state.data.map((row) => {
          if (row.id === rowId) {
            const newRow = { ...row };
            newRow[dataField] = newValue;
            return newRow;
          }
          return row;
        });
      }
      let result = this.state.data;

      // Handle column filters
      result = result.filter((row) => {
          
        let valid = true;
        for (const dataField in filters) {
          const { filterVal, filterType, comparator } = filters[dataField];

          if (filterType === 'TEXT') {
            if (comparator === Comparator.LIKE) {
              valid = row[dataField].toString().indexOf(filterVal) > -1;
            } else {
              valid = row[dataField] === filterVal;
            }
          }
          if (!valid) break;
        }
        return valid;
      });
      // Handle column sort
      if (sortOrder === 'asc') {
        result = result.sort((a, b) => {
          if (a[sortField] > b[sortField]) {
            return 1;
          } else if (b[sortField] > a[sortField]) {
            return -1;
          }
          return 0;
        });
      } else {
        result = result.sort((a, b) => {
          if (a[sortField] > b[sortField]) {
            return -1;
          } else if (b[sortField] > a[sortField]) {
            return 1;
          }
          return 0;
        });
      }
      this.setState(() => ({
        page,
        data: result.slice(currentIndex, currentIndex + sizePerPage),
        totalSize: result.length,
        sizePerPage
      }));

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