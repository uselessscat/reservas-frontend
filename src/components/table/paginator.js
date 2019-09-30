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
        return (
            <ToggleButtonGroup type='radio' name='options' value={this.props.page} onChange={this.props.onChange}>
                <Button variant='outline-primary' onClick={this.props.onPrev} disabled={this.props.page == 1}>Anterior</Button>

                {Array(this.props.pages)
                    .fill(0)
                    .map((e, i) => <ToggleButton variant='outline-primary' key={i} value={i + 1}>{i + 1}</ToggleButton>)}

                <Button variant='outline-primary' onClick={this.props.onNext} disabled={this.props.page == this.props.pages}>Siguiente</Button>
            </ToggleButtonGroup>
        )
    }
}