import { useState } from "react";
import { 
    TextInput,
    View,
    StyleSheet,
    Alert
} from "react-native";

// Components
import PrimaryButton from "../components/PrimaryButton";
// Assets
import { colors } from '../assets/colors'

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
            console.log(chosenNumber)
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
        <View style={styles.inputContainer}>
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
        </View>
    )

}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        marginTop: 100,
        backgroundColor: colors.blue.primary,
        borderRadius: 8,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
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
    }
})