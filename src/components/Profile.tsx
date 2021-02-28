import styles from '../styles/components/Profile.module.css';

import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/17083675?s=400&u=91534c33bdcd794a2821370d81ccfdb92895ffc3&v=4" alt="Daniel Moura" />
            <div>
                <strong>Daniel Moura</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level" />

                    Level {level}
                </p>
            </div>
        </div>
    )
}