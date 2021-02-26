import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/17083675?s=400&u=91534c33bdcd794a2821370d81ccfdb92895ffc3&v=4" alt="Daniel Moura" />
            <div>
                <strong>Daniel Moura</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level" />

                    Level 1
                </p>
            </div>
        </div>
    )
}