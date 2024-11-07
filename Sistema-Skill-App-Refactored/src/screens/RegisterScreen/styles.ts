import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    content: {
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        gap: 20,
    },
    textContainer: {
    },
    title: {
        fontFamily: "Poppins-MediumItalic",
        fontSize: 50,
        fontWeight: "500",
        color: THEME.COLORS.WHITE,
    },
    subTitle: {
        fontSize: 25,
        textAlign: "center",
        color: THEME.COLORS.WHITE,
        fontWeight: "300"
    }
});