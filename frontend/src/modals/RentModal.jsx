import styles from '../modules/RentModal.module.css';
import { useState } from 'react';

function RentModal({ closeModal, selectedModel }){

    const [ startDate, setStartDate ] = useState("");

    async function handleRent() {
        
        if (!selectedModel || !startDate) return;
        
        const rentalData = {
            modelId: selectedModel._id,
            modelName: selectedModel.firstName,
            startDate,
            totalPrice: selectedModel.price,
            status: 'pending'
        };

        try {
            const response = await fetch("http://localhost:5000/rentals", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(rentalData),
            });

            const result = await response.json();
            console.log("Rental Created: ", result);
        } catch (error) {
            console.error('Error Renting: ', error);
        }
    }

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.overlay}></div>
                <div className={styles.modalContent}>
                    <img className={styles.modalImage} src={selectedModel.imageUrl}></img>
                    <h2>Rent {selectedModel.firstName}</h2>
                    <form>
                        <label>
                            Select Date:
                            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                        </label>
                        <br />
                        <button className={styles.confirmButton} onClick={handleRent} type="submit">Confirm Rental</button>
                    </form>
                    <button className={styles.closeButton} onClick={closeModal}>Close</button>
                </div>
            </div>
        </>
    );
}

export default RentModal;