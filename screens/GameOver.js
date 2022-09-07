import { 
    Image,
    StyleSheet,
    Text,
    View
} from "react-native"

// Components
import Title from "../components/Title";
// Assets
import { colors } from "../assets/colors";

const GameOverScreen = () => {

    return(
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/images/success.png')}
                    style={styles.image}    
                />
            </View>
            <View>
                <Text>Your phone needed X rounds to guess the number Y.</Text>
            </View>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: colors.blue.darkest,
        overflow: "hidden",
        margin: 35
    },
    image: {
        width: '100%',
        height: '100%',
    }
})