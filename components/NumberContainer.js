import { Text, View, StyleSheet } from "react-native";
import { colors } from "../assets/colors";

const NumberContainer = ({numberText}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{numberText}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colors.yellow.secondary,
        borderRadius: 8,
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: colors.yellow.secondary,
        fontSize: 36,
        fontWeight: 'bold'
    }
})