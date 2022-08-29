import { 
    TextInput,
    View,
    StyleSheet
} from "react-native";

import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput} 
                maxLength={2}
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
        backgroundColor: '#72063c',
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
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',

    }
})