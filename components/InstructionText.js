import { StyleSheet, Text } from "react-native"

// Assets
import { colors } from '../assets/colors'

const InstructionText = ({children}) => {

    return <Text style={styles.instructionText}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
        color: colors.yellow.primary,
        textAlign: "center",
        fontSize: 24
    }
})