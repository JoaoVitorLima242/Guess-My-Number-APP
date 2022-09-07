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
import PrimaryButton from "../components/PrimaryButton";

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
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number <Text style={styles.highlight}>Y</Text>.
                </Text>
                <PrimaryButton>Start new game</PrimaryButton>
            </View>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        // justifyContent: 'center',
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
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 20
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: colors.yellow.secondary
    }
})