'use client';

import { useState } from 'react';

const Capventa = () => {
    const [count, setCount] = useState(1);
    const price = 10; 

    const handleRemove = () => {
        alert('Producto eliminado');
    };

    const handleEdit = () => {
        alert('Producto editado');
    };

    return (
        <div style={styles.panel}>
            <div style={styles.image}></div>

            <div style={styles.text}>
                <p style={styles.productName}>Descripción del producto</p>
                <div style={styles.priceAndCount}>
                    <span style={styles.count}>Cantidad: {count}</span>
                    <p style={styles.price}>${(price * count).toFixed(2)}</p>
                </div>
            </div>

            <div style={styles.buttonsContainer}>
                <button style={styles.removeButton} onClick={handleRemove}>Eliminar</button>

                <a href="/createuser">
            <button style={styles.editButton} onClick={handleEdit}>Editar</button>
        </a>
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
        width: '1138px',
        height: '127px',
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
    productName: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    priceAndCount: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px'
    },
    count: {
        fontSize: '16px',
        marginBottom: '5px'
    },
    price: {
        fontSize: '18px',
        fontWeight: 'bold'
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    removeButton: {
        backgroundColor: '#ff4d4d',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        marginBottom: '10px',
        borderRadius: '5px'
    },
    editButton: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '5px'
    }
};

export default Capventa;
