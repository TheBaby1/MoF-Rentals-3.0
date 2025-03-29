import styles from '../modules/Card.module.css';
import { useEffect, useState } from 'react';
function Card(){

    const [ models, setModels ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/models')
            .then((res) => res.json())
            .then((data) => setModels(data))
            .catch((error) => console.error("Error Fetching Rentals: ", error))
    }, []);

    function clicked(){
        console.log('Clicked!');
    }

    return (
        <>
            {models.length > 0 ? (
                models.map((model) => (
                    <div className={styles.card} key={model._id}>
                        <img className={styles.cardImage} alt="Model"></img>
                        <h2 className={styles.cardName}>{model.firstName}</h2>
                        <h3 className={styles.cardPrice}>Price: {model.price}</h3>
                        <p className={styles.cardText}>{model.description}</p>
                        <button className={styles.button} onClick={clicked}>Rent</button>
                    </div>
                ))
            ) : (
                <p>Loading rentals...</p>
            )}
        </>
    );
}

export default Card;