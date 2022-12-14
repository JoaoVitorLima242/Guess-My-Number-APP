import { Dimensions, StyleSheet, View } from "react-native"

// Assets
import { colors } from '../assets/colors'

const Card = ({children}) => {

    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

export default Card

const deviceHeigth = Dimensions.get('window').height

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 14,
        marginTop: deviceHeigth > 400 ? 50 : 20,
        backgroundColor: colors.blue.primary,
        borderRadius: 8,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})