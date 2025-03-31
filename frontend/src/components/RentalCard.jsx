import styles from '../modules/RentalCard.module.css';
import { useState, useEffect } from 'react';
function RentalCard() {

    const [ rentals, setRentals ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/rentals')
            .then((res) => res.json())
            .then((data) => setRentals(data))
            .catch(() => console.error({ error: error.message }))
    }, []);

    function handleCancel(id) {
        
        fetch(`http://localhost:5000/rentals/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.message);
            setRentals((prevRentals) => prevRentals.filter(rental => rental._id !== id));
        })
        .catch((error) => console.error('Error Deleting Rental: ', error.message));
    }

    return (
        <>
            {rentals.length > 0 ? (
                rentals.map((rental) => (
                    <div className={styles.card} key={rental._id}>
                        <img></img>
                        <h2 className={styles.cardName}>Name: {rental.modelName}</h2>
                        <h3 className={styles.cardPrice}>Amount: {rental.totalPrice}</h3>
                        <h3 className={styles.cardDate}>Date: {rental.startDate}</h3>
                        <h3 className={styles.cardStatus}>Status: {rental.status}</h3>
                        <button className={styles.cancelButton} onClick={() => handleCancel(rental._id)}>Cancel</button>
                    </div>
                ))
            ) : (
                <p>lodaing rentals...</p>
            )}
        </>
    );
}

export default RentalCard;