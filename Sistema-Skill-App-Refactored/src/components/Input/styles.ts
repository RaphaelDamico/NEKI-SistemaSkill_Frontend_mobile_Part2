import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        height: 70,
        justifyContent: "space-between",
    },
    label: {
        fontWeight: "500",
        fontSize: 16,
        color: THEME.COLORS.BLUE_700,
        paddingHorizontal: "8%"

    },
    input: {
        width: "90%",
        height: 30,
        alignSelf: "center",
        borderRadius: 50,
        padding: 8,
        backgroundColor: THEME.COLORS.GREY,
        elevation: 5,
    },
    viewIcon: {
        position: "relative",
        left: "85%",
        bottom: "35%",
    }
});