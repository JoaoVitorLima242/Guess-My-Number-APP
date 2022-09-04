import { StyleSheet, Text } from "react-native";

// Assets
import { colors } from "../assets/colors";

const Title = ({text}) => {

    return <Text style={styles.title}>{text}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.yellow.secondary,
        textAlign:  "center",
        borderWidth: 2,
        borderColor: colors.yellow.secondary,
        padding: 12
    }
})