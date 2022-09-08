import { useState } from "react";
import { 
    TextInput,
    View,
    StyleSheet,
    Alert
} from "react-native";

// Components
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
// Assets
import { colors } from '../assets/colors'
import Title from "../components/Title";

const StartGameScreen = ({onConfirmNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (enteredText) => {
        console.log(enteredNumber)
        setEnteredNumber(enteredText)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'OK', style: 'destructive', onPress:  resetInputHandler}]
                )
            return;
        }

        onConfirmNumber(chosenNumber)
    }

    return(
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card style={styles.inputContainer}>
                <InstructionText>Enter a number</InstructionText>
                <TextInput 
                    style={styles.textInput} 
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.flexButtons}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton 
                            onPress={resetInputHandler}
                        >
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={confirmInputHandler}
                        >
                            Confirm
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )

}

export default StartGameScreen;

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        textAlign: "center",
        borderBottomColor: colors.yellow.primary,
        borderBottomWidth: 2,
        color: colors.yellow.primary,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    flexButtons: {
        flexDirection: 'row',
        justifyContents: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center'
    }
})