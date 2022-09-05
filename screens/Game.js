import { useState, useEffect, useMemo } from "react"
import { 
    Text,
    View,
    StyleSheet,
    Alert
} from "react-native"

// Components 
import Title from "../components/Title"
import NumberContainer from "../components/NumberContainer"
import PrimaryButton from "../components/PrimaryButton"
// Helpers
import { generateRandomBetween } from "../helpers/number"

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = useMemo(() => generateRandomBetween(minBoundary, maxBoundary, userNumber), [userNumber, onGameOver])
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if( currentGuess === userNumber) onGameOver()
    }, [currentGuess, userNumber, onGameOver])

    const nextGuessHandler = ( direction ) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert(
                "Don't lie!",
                'You know this is wrong...',
                [{text: 'Sorry!', style: 'cancel'}]
            )
            return;
        }

        if(direction === 'lower') {
            maxBoundary = currentGuess - 1;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber)
    }



    return (
        <View style={styles.screen}>
            <Title text={"Opponent's Guess"}/>
            <NumberContainer numberText={currentGuess}/>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton
                        onPress={() => nextGuessHandler('higher')}
                    >
                        +
                    </PrimaryButton>
                    <PrimaryButton
                        onPress={() => nextGuessHandler('lower')}
                    >
                        -
                    </PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttons: {

    }
})