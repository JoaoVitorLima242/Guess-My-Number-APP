import { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Screens
import StartGameScreen from './screens/StartGame';
import GameScreen from './screens/Game';
// Assets
import { colors } from './assets/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState(null)

  const StartGameHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onConfirmNumber={StartGameHandler}/>

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient 
      style={styles.rootScrean}
      colors={[
        colors.blue.darkest,
        colors.blue.darkest,
        colors.blue.secondary,
        colors.blue.primary,
      ]}
    >
      <ImageBackground 
        source={require('./assets/background.png')}
        resizeMode='cover'
        style={styles.rootScrean}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScrean: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.35,
  }
});
