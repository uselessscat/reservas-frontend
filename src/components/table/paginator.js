import React from 'react';

import { Button, ButtonToolbar, ToggleButtonGroup } from 'react-bootstrap';

export default class Paginator extends React.Component {
    render() {
        return (
            <ButtonToolbar className="justify-content-end">
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    {this.getPaginationButtons()}
                </ToggleButtonGroup>
            </ButtonToolbar>
        )
    }

    getPaginationButtons() {
        if (this.props.pages === undefined || this.props.pages < 0) {
            return this.getPaginationNotAvailableButton();
        } else {
            return this.generatePageList().map((item, index) => {
                return <Button key={index} variant="outline-primary">{item}</Button>
            })
        }
    }

    getPaginationNotAvailableButton() {
        return <Button variant="outline-primary" disabled>Paginación no disponible</Button>
    }

    generatePageList() {
        const pages = this.props.pages;

        return ['Anterior', ...Array(pages).fill(0).map((e, i) => i + 1), 'Siguiente']
    }
}