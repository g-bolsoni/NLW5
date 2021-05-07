import '../styles/global.scss';


import {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles} from '../contexts/PlayerContext';


import {Header}  from '../components/Header';
import {Player}  from '../components/Player';

import styles from '../styles/app.module.scss'
import { PlayerContextProvider, usePlayer  } from '../contexts/PlayerContext';



function MyApp({ Component, pageProps }) {
  const {toggleTheme, theme } = usePlayer();
  
  return(
    <PlayerContextProvider>
      <ThemeProvider theme={ theme === '' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <div className={styles.wrapper}>
            <main>
              <button onClick={toggleTheme}> Change</button>
              <Header/>
              <Component {...pageProps}/>
            </main>
            <Player/>
        </div>
      </ThemeProvider>
    </PlayerContextProvider>

  )
}

export default MyApp
