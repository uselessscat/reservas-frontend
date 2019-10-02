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

        return (
            <ToggleButtonGroup type='radio' name='options' value={this.props.page} onChange={handler}>
                <Button variant='outline-primary' onClick={() => handler(this.props.page - 1)} disabled={this.props.page <= 1}>Anterior</Button>

                {Array(this.props.pages)
                    .fill(0)
                    .map((e, i) => <ToggleButton variant='outline-primary' key={i} value={i + 1}>{i + 1}</ToggleButton>)}

                <Button variant='outline-primary' onClick={() => handler(this.props.page + 1)} disabled={this.props.page >= this.props.pages}>Siguiente</Button>
            </ToggleButtonGroup>
        )
    }
}