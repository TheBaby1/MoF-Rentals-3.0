import styles from '../modules/SignUp.module.css';
import { useState } from 'react';
function SignUp() {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    async function handleSubmit(e){
        
        const userData = {
            firstName,
            lastName,
            username,
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:5000/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const result = await response.json();
            console.log('User Created: ', result);
        } catch (error) {
            console.error('Error Creating User: ', error);
        }
    }

    return (
        <>
            <div className={styles.signUpCard}>
                <div className={styles.signUpForm}>
                    <h2>Sign Up</h2>
                    <br></br>
                    <h4>It's Free!</h4>
                    <div className={styles.inputFields}>
                        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                        <input type="text" placeholder="Last Name" valiue={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    

                    <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
                </div>

                <div className={styles.signUpInfo}>

                </div>
            </div>
        </>
    );
}

export default SignUp;