import "bootstrap/dist/css/bootstrap.min.css"

import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
        </div>
    );
};

export default App;