import { useState, useEffect, useMemo } from "react"
import { 
    Text,
    View,
    StyleSheet,
    Alert
} from "react-native"
import { Ionicons } from '@expo/vector-icons'

// Components 
import Title from "../components/Title"
import NumberContainer from "../components/NumberContainer"
import PrimaryButton from "../components/PrimaryButton"
// Helpers
import { generateRandomBetween } from "../helpers/number"
import Card from "../components/Card"
import InstructionText from "../components/InstructionText"

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
            <Card>
                <View>
                    <InstructionText>Higher or lower?</InstructionText>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton
                                onPress={() => nextGuessHandler('higher')}
                            >
                                <Ionicons name="md-add" size={24} color='#fff'/>
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton
                                onPress={() => nextGuessHandler('lower')}
                            >
                                <Ionicons name="md-remove" size={24} color='#fff'/>
                            </PrimaryButton>
                        </View>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    buttonContainer: {
        flex: 1
    }
})