import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
        let recect = {
            nombre: 'pizza',
            ingredients: ['Tomate', 'Queso'],
            calories: 400
        };

        return (
            <React.Fragment>
                <h1>MyComponent</h1>
                <p>{'Receta: ' + recect.nombre}</p>
                <p>{recect.ingredients.map((ingredients, i) => {
                    console.log(ingredients);
                    return (
                        <li key={i}>
                            {ingredients}
                        </li>
                    )
                })
                }</p>
                <p>{recect.nombre}</p>

            </React.Fragment>
        );
    }
}

export default MyComponent;