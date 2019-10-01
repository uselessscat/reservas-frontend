import React from 'react';

export default function PaginationInfo({ itemFrom = 0, itemTo = 0, items = 0 }) {
    return (
        <div>
            Mostrando del {itemFrom} al {itemTo} de {items} resultados
        </div>
    )
}