import React from 'react';

import { Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default class Paginator extends React.Component {
    render() {
        return (
            <ButtonToolbar className='justify-content-end'>
                {this.getPaginationButtons()}
            </ButtonToolbar>
        )
    }

    getPaginationButtons() {
        if (this.props.pages === undefined || this.props.pages < 1) {
            return this.getPaginationNotAvailableButton();
        } else {
            return this.generatePageList();
        }
    }

    getPaginationNotAvailableButton() {
        return (
            <ToggleButtonGroup type='radio' name='options' defaultValue={1}>
                <Button variant='outline-primary' disabled>Paginación no disponible</Button>
            </ToggleButtonGroup>
        )
    }

    generatePageList() {
        // avoid error on undefined handler
        const handler = this.props.onChangePage || (() => { });
        const pages = Array();

        let startPage = Math.max(0, this.props.page - 3);
        let endPage = Math.min(this.props.page + 2, this.props.pages);

        for (let i = startPage; i < endPage; i++) {
            pages.push(<ToggleButton variant='outline-primary' key={i} value={i + 1}>{i + 1}</ToggleButton>)
        }

        let minusFiveButton = undefined;
        if (this.props.page - 5 > 0) {
            minusFiveButton = <Button variant='outline-primary' onClick={() => handler(this.props.page - 5)}>-5</Button>
        }

        let plusFiveButton = undefined;
        if (this.props.page + 5 < this.props.pages) {
            plusFiveButton = <Button variant='outline-primary' onClick={() => handler(this.props.page + 5)}>+5</Button>
        }

        return (
            <ToggleButtonGroup type='radio' name='options' value={this.props.page} onChange={handler}>
                {minusFiveButton}
                <Button variant='outline-primary' onClick={() => handler(this.props.page - 1)} disabled={this.props.page <= 1}>-1</Button>
                {pages}
                <Button variant='outline-primary' onClick={() => handler(this.props.page + 1)} disabled={this.props.page >= this.props.pages}>+1</Button>
                {plusFiveButton}
            </ToggleButtonGroup>
        )
    }
}