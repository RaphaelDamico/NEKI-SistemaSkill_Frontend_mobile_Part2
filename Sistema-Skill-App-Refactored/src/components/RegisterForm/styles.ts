import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    formContainer: {
        width: "80%",
        minHeight: 300,
        backgroundColor: THEME.COLORS.WHITE,
        borderRadius: 16,
        paddingVertical: 15,
        elevation: 10,
        flexGrow: 1,
    },
    formContent: {
        gap: 10,
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