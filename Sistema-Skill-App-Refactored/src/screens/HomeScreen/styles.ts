import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.WHITE,
        gap: 15,
    },
    buttonInputContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingHorizontal: "3%",
        bottom: "1%",
    },
    inputContainer: {
        width: "53%",
        left: "8%"
    },
});