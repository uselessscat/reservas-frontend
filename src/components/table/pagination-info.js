import React from 'react';

export default function PaginationInfo({ from = 0, to = 0, total = 0 }) {
    return (
        <div>
            Mostrando del {from} al {to} de {total} resultados
        </div>
    )
}