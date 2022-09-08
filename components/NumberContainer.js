import { Text, View, StyleSheet, Dimensions } from "react-native";
import { colors } from "../assets/colors";

const NumberContainer = ({numberText}) => {

    return (
        <View style={[styles.container, styles.borderTitle]}>
            <Text style={styles.numberText}>{numberText}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        padding: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: colors.yellow.secondary,
        fontSize: 36,
        fontWeight: 'bold'
    },
    borderTitle: {
        borderWidth: 2,
        borderColor: colors.yellow.secondary,
    }
})