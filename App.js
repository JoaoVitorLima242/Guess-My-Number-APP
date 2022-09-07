import { useState } from 'react';
import { 
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

// Screens
import StartGameScreen from './screens/StartGame';
import GameScreen from './screens/Game';
import GameOverScreen from './screens/GameOver';
// Assets
import { colors } from './assets/colors';
// Components
import Title from './components/Title';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [isOver, setIsOver] = useState(true)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  });

  
  const StartGameHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setIsOver(false)
  }
  const gameOverHandler = () => {
    setIsOver(true)
  }
  
  
  let screen = <StartGameScreen onConfirmNumber={StartGameHandler}/>
  
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  
  if (isOver && userNumber) {
    screen = <GameOverScreen />
  }
  
  if (!fontsLoaded) return <AppLoading/>

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
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScrean}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView
          style={styles.rootContainer}
        >
          <Title text={'Guess My Number'}/>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScrean: {
    flex: 1
  },
  rootContainer: {
    marginTop: 40,
    flex: 1
  },  
  backgroundImage: {
    opacity: 0.15,
  }
});
