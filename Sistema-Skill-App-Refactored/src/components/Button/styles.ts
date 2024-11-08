import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    button: {
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        color: THEME.COLORS.BLUE_700,
    },
    buttonContent: {
        color: THEME.COLORS.WHITE,
        fontWeight: "500",
        fontSize: 16,
    }
});