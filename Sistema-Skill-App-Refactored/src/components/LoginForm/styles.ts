import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: THEME.COLORS.WHITE,
        width: "80%",
        minHeight: 325,
        borderRadius: 16,
        paddingVertical: 10,
        elevation: 10
    },
    formContent: {
        justifyContent: "space-around",
        minHeight: 325
    },
    buttonContainer: {
        gap: 10
    },
    errorContainer: {
        paddingHorizontal: 20,
    },
    errorSpan: {
        color: THEME.COLORS.RED,
        fontSize: 14,
        fontWeight: "600"
    },
});