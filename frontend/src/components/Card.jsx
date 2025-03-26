import styles from '../modules/Card.module.css';
function Card(){

    return (
        <>
            <div className={styles.card}>
                <img className={styles.cardImage}></img>
                <h2 className={styles.cardName}>Marcelo</h2>
                <h3 className={styles.cardPrice}>110</h3>
                <p className={styles.cardText}>This one is the best</p>
            </div>
        </>
    );
}

export default Card;