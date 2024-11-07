import { StyleSheet } from "react-native"
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: THEME.COLORS.WHITE,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 16,
        alignSelf: "center",
        elevation: 10,
        width: "90%",
        marginBottom: 20,
        top: "10%",
        gap: 10
    },
    title: {
        color: THEME.COLORS.BLUE_700,
        fontSize: 28,
        fontWeight: "600",
        textAlign: "center"
    },
    text: {
        color: THEME.COLORS.BLUE_700,
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center"
    }
});