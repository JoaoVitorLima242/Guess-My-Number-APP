import {
    View,
    Text,
    Pressable,
    StyleSheet
} from 'react-native'

// Assets
import { colors } from '../assets/colors'

const PrimaryButton = ({ children }) => {
    const PressHandler = () => {
        console.log('pressed')
    }
    
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonInnerContainer} onPress={PressHandler} android_ripple={{color: colors.blue.darkest}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: colors.blue.secondary,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})