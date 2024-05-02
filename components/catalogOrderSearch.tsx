import React from 'react';

const CatalogOrderSearch = () => {
    return (
        <div className="flex w-full items-center justify-center">
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                    Filtrar por...
                </option>
                <option>Recientes</option>
                <option>Popular última semana</option>
                <option>Popular último mes</option>
                <option>Popular último año</option>
                <option>Más populares</option>
            </select>
        </div>
    );
};

export default CatalogOrderSearch;