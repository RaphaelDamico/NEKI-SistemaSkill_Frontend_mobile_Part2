import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    formContainer: {
        width: "80%",
        height: 325,
        backgroundColor: THEME.COLORS.WHITE,
        borderRadius: 16,
        paddingVertical: 10,
        elevation: 10
    },
    formContent: {
        gap: 10,
    },
    errorContainer: {
        paddingHorizontal: 10,
    },
    errorSpan: {
        color: "red",
        fontSize: 14,
    },
});