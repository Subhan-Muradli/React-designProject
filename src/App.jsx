import React from 'react';
import loqoImage from './picture/loqo.jpg';
import futbolImage from './picture/futbol.jpg';
import styles from './App.module.css';

function App() {
    return (
        <div>
            <img src={loqoImage} alt="Xeta" className={styles.picture1}/>
            <img src={futbolImage} alt='Xeta' className={styles.picture2}/>
            <div className={styles.container1}>
               <div>About</div>
               <div>How it works</div>
               <div>Pricing</div>
               <div>FAQS</div>
            </div>
            <div className={styles.container2}>
              <div><button className={styles.button1}>Login</button></div>
              <div><button className={styles.button2}>Sign Up</button></div>
            </div>
            <div className={styles.write}><h1> UĞURA GEDƏN YOL MÜBARİZƏDƏN KEÇİR</h1></div>
            <input type='text' className={styles.email} placeholder='Enter your email'/>
            <button className={styles.button3}>Get Started</button>
            <footer>
              <div className={styles.footerbackground}></div>
            </footer>
        </div>
    );
}

export default App;

