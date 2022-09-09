import { 
    useWindowDimensions,
    StyleSheet,
    Text
} from "react-native";

// Assets
import { colors } from "../assets/colors";

const Title = ({children}) => {
    const windowProps = useWindowDimensions()

    const marginTop = windowProps.height > 400 ? 60 : 0

    return <Text style={[styles.title, {marginTop}]}>{children}</Text>
}

export default Title;


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        // fontWeight: 'bold',
        color: colors.yellow.secondary,
        textAlign:  "center",
        padding: 12,
        fontFamily: 'open-sans-bold',
        maxWidth: '80%',
        width: 300
    }
})