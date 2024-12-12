'use client';
import editAddress from '../editAddress/page';

import { useState } from 'react';

const BoxDoc = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleCircle = () => setIsActive(!isActive);
    const handleEdit = () => {
        alert('Editar documento');
    };

    return (
        <div style={styles.panel}>
            {/* Círculo */}
            <div
                style={{
                    ...styles.circle,
                    backgroundColor: isActive ? '#4CAF50' : '#fff',
                    border: isActive ? 'none' : '2px solid #4CAF50'
                }}
                onClick={toggleCircle}
            ></div>

            {/* Texto */}
            <div style={styles.text}>
                <h1 style={styles.title}>C.P 63532</h1>
                <p style={styles.subText}>Calle San Jeronimo</p>
                <p style={styles.subText}>Héctor Leon Lucas García</p>
                <button style={styles.editButton} onClick={handleEdit}>Editar</button>
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
    circle: {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'background-color 0.3s, border 0.3s'
    },
    text: {
        flex: 1,
        marginLeft: '20px'
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '0 0 5px 0'
    },
    subText: {
        fontSize: '14px',
        margin: '2px 0',
        color: '#555'
    },
    editButton: {
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        marginTop: '10px',
        borderRadius: '5px'
    }
};

export default BoxDoc;
