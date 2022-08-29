import { 
    TextInput,
    View,
    StyleSheet
} from "react-native";

// Components
import PrimaryButton from "../components/PrimaryButton";
// Assets
import { colors } from '../assets/colors'

const StartGameScreen = () => {
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput} 
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize="none"
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )

}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
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

    }
})