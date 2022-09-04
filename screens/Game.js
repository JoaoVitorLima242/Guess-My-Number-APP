import { useState } from "react"
import { 
    Text,
    View,
    StyleSheet
} from "react-native"

// Components 
import Title from "../components/Title"
import NumberContainer from "../components/NumberContainer"

const GameScreen = ({ userNumber }) => {
    const [currentGuess, setCurrentGuess] = useState(userNumber)
    
    const generateRandomBetween = (min, max, exclude) => {
      let rndNum = Math.floor(Math.random() * (max - min)) + min;
    
      if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
      } else {
        return rndNum;
      } 
    }

    const initialGuess = generateRandomBetween(1, 100, userNumber)


    return (
        <View style={styles.screen}>
            <Title text={"Opponent's Guess"}/>
            <NumberContainer numberText={currentGuess}/>
            <View>
                <Text>Higher or lower?</Text>
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})