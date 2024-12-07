'use client';

import { useState } from 'react';

const BoxProduc = () => {
    const [count, setCount] = useState(1);
    const price = 10; 

    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(count > 1 ? count - 1 : 1);
    const handleRemove = () => {
        alert('Producto eliminado');
    };

    return (
        <div style={styles.panel}>
            {/* Imagen */}
            <div style={styles.image}></div>

            {/* Texto */}
            <div style={styles.text}>
                <p>Descripción del producto</p>
                <button style={styles.removeButton} onClick={handleRemove}>Eliminar</button>
            </div>

            {/* Contador y Precio */}
            <div style={styles.counter}>
                <button style={styles.button} onClick={handleDecrease}>-</button>
                <span style={styles.count}>{count}</span>
                <button style={styles.button} onClick={handleIncrease}>+</button>
                <p style={styles.price}>${(price * count).toFixed(2)}</p>
            </div>
        </div>
    );
};

const styles = {
    panel: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '10px 20px',
        width: '80%',
        maxWidth: '800px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
        margin: '10px 0'
    },
    image: {
        width: '60px',
        height: '60px',
        backgroundColor: '#ddd',
        borderRadius: '8px',
        marginRight: '20px'
    },
    text: {
        flex: 1
    },
    removeButton: {
        backgroundColor: '#ff4d4d',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        marginTop: '10px',
        borderRadius: '5px'
    },
    counter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'flex-start'
    },
    button: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '5px',
        margin: '0 10px'
    },
    count: {
        fontSize: '18px',
        margin: '0 10px'
    },
    price: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginLeft: '20px'
    }
};

export default BoxProduc;
