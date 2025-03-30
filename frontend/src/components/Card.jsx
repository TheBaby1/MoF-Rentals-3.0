import styles from '../modules/Card.module.css';
import { useEffect, useState } from 'react';
import RentModal from '../modals/RentModal';
function Card(){

    const [ models, setModels ] = useState([]);
    const [ modal, setModal ] = useState(false);
    const [ selectedModel, setSelectedModel ] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/models')
            .then((res) => res.json())
            .then((data) => setModels(data))
            .catch((error) => console.error("Error Fetching Rentals: ", error))
    }, []);

    function openModal(data) {
        setModal(true);
        setSelectedModel(data);
    }

    function closeModal() {
        setModal(false);
    }

    return (
        <>
            {models.length > 0 ? (
                models.map((model) => (
                    <div className={styles.card} key={model._id}>
                        <img className={styles.cardImage} src={model.imageUrl} alt="Model"></img>
                        <h2 className={styles.cardName}>{model.firstName}</h2>
                        <h3 className={styles.cardPrice}>Price: {model.price}/day</h3>
                        <h3 className={styles.cardAge}>Age: {model.age}</h3>
                        <p className={styles.cardText}>{model.description}</p>
                        <button className={styles.button} onClick={() => openModal(model)}>Rent</button>
                    </div>
                ))
            ) : (
                <p>Loading rentals...</p>
            )}

            {modal ? <RentModal closeModal={closeModal} selectedModel={selectedModel}></RentModal> : null}
            
        </>
    );
}

export default Card;