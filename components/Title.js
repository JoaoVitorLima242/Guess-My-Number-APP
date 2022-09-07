import { StyleSheet, Text } from "react-native";

// Assets
import { colors } from "../assets/colors";

const Title = ({children}) => {

    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        // fontWeight: 'bold',
        color: colors.yellow.secondary,
        textAlign:  "center",
        padding: 12,
        marginTop: 20,
        fontFamily: 'open-sans-bold'
    }
})