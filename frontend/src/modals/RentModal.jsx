import styles from '../modules/RentModal.module.css';
import { useState } from 'react';

function RentModal({ closeModal, selectedModel }){

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
                            <input type="date" name="rentalDate" required />
                        </label>
                        <br />
                        <button className={styles.confirmButton} type="submit">Confirm Rental</button>
                    </form>
                    <button className={styles.closeButton} onClick={closeModal}>Close</button>
                </div>
            </div>
        </>
    );
}

export default RentModal;