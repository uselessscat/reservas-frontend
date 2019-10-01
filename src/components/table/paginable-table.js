import React from 'react';
import EntryCountSelector from './entry-count-selector';
import Paginator from './paginator';
import EntryCount from './entry-count';

class PaginableTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: 10,
            page: 1
        }

        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onNext() {
        this.setState((prevState) => {
            return { page: prevState.page + 1 }
        });
    }

    onPrev() {
        this.setState((prevState) => {
            return { page: prevState.page - 1 }
        });
    }

    onChange(id) {
        this.setState((prevState) => {
            return { page: id }
        });
    }

    render() {
        return (
            <div>
                <div className='row '>
                    <div className='col-sm-12 col-md-6'>
                        <EntryCountSelector options={[10, 25, 50, 100]} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <table className="table table-hover table-striped table-bordered">
                            {this.props.children}
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <EntryCount from={this.props.page * this.props.pageSize} to={1} total={this.props.elements} />
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <Paginator
                            pages={this.state.pages}
                            page={this.state.page}
                            onChange={this.onChange}
                            onPrev={this.onPrev}
                            onNext={this.onNext} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PaginableTable;