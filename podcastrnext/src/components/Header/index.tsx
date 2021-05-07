import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { usePlayer } from '../../contexts/PlayerContext';
import Switch from 'react-switch'

import styles from './styles.module.scss';

export function Header(){
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    const Theme = usePlayer();

    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt='Logo' />
            <p>The best for you listening, for ever</p>
            <span>{currentDate}</span>
            
            {/*Darkmode */}
            <Switch
                onChange={Theme.toggleTheme}
                checked={ Theme?.theme === 'light'}
                checkedIcon= {false}
                uncheckedIcon= {false}
                offColor="#000"
                onColor="#485460"
                offHandleColor="#fff8"
                
            />
        </header>
    );
}


