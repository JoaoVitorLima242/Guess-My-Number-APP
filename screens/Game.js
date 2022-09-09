import { useState, useEffect, useMemo } from "react"
import { 
    Text,
    View,
    StyleSheet,
    Alert,
    FlatList
} from "react-native"
import { Ionicons } from '@expo/vector-icons'

// Components 
import Title from "../components/Title"
import NumberContainer from "../components/NumberContainer"
import InstructionText from "../components/InstructionText"
import GuessLogItem from "../components/GuessLogItem"
import PrimaryButton from "../components/PrimaryButton"
import Card from "../components/Card"
// Helpers
import { generateRandomBetween } from "../helpers/number"

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = useMemo(() => generateRandomBetween(minBoundary, maxBoundary, userNumber), [userNumber, onGameOver])
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])


    useEffect(() => {
        if( currentGuess === userNumber) onGameOver(guessRounds.length  )
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() =>{
        minBoundary = 1
        maxBoundary = 100;
    }, [])

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
        setGuessRounds(prevState => [newRandomNumber, ...prevState])
    }

    const guessRoundsListLength = guessRounds.length



    return (
        <View style={styles.screen}>
            <Title>Guess Number</Title>
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
            <View style={styles.listContainer}>
               <FlatList 
                    data={guessRounds}
                    keyExtractor={(item => item)}
                    renderItem={({item, index}) => (
                        <GuessLogItem roundNumber={guessRoundsListLength - index} guess={item}/>
                    )}
               />
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
})