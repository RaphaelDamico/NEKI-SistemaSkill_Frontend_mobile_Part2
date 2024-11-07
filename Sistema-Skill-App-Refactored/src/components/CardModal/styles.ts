import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    cardModalContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    cardModalContent: {
        width: "100%",
        height: 50,
        backgroundColor: THEME.COLORS.BLUE_700,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8,
        padding: 5,
    }
});