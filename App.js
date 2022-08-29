import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Screens
import StartGameScreen from './screens/StartGame';
// Assets
import { colors } from './assets/colors';

export default function App() {
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
        <StartGameScreen/>
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
},
);
