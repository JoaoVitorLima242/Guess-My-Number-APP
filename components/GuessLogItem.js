import { StyleSheet, Text, View } from "react-native"
import { colors } from "../assets/colors"

const GuessLogItem = ({guess, roundNumber}) => {

    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Guess Number: {' ' + guess}</Text>
        </View>
    )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        borderColor: colors.yellow.primary,
        borderWidth: 2,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        fontFamily: 'open-sans',
        color: colors.yellow.primary
    }
    
})

