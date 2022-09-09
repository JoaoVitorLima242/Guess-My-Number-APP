import { 
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
    ScrollView
} from "react-native"

// Components
import Title from "../components/Title";
// Assets
import { colors } from "../assets/colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
    const {width, height} = useWindowDimensions()

    let imageSize =  300;

    if (width < 380) imageSize = 150

    
    if (height < 400 ) imageSize = 80

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        margin: width < 380 ? 0 : 35
    }

    return(
        <ScrollView style={{flex: 1}}>
            <View style={styles.rootContainer}>
                <Title>Game Over!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image 
                        source={require('../assets/images/success.png')}
                        style={styles.image}    
                    />
                </View>
                <View>
                    <Text style={styles.summaryText}>
                        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
                    </Text>
                    <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
                </View>
            </View>
        </ScrollView>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: colors.blue.darkest,
        overflow: "hidden",
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 14,
        color: colors.yellow.secondary
    },
    highlight: {
        fontFamily: 'open-sans-bold',
    }
})