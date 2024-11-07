import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    checkboxContainer: {
        width: "85%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#000",
        backgroundColor: THEME.COLORS.WHITE,
        justifyContent: "center",
        alignItems: "center",
    },
    checked: {
        backgroundColor: THEME.COLORS.WHITE,
    },
    checkboxLabel: {
        fontSize: 15,
        fontWeight: "500",
        color: THEME.COLORS.BLUE_700,
    }
});