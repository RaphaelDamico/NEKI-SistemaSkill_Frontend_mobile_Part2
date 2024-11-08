import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.WHITE,
        gap: 15,
    },
    inputContainer: {
        width: "100%",
        alignItems: "flex-end",
        bottom: "1%",
    },
    inputContent: {
        width: "50%",
        right: "1.5%",

    }
});