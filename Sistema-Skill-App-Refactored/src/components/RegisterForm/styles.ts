import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    formContainer: {
        width: "80%",
        height: 390,
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
        paddingHorizontal: 10,
    },
    errorSpan: {
        color: THEME.COLORS.RED,
        fontSize: 14,
    },
});