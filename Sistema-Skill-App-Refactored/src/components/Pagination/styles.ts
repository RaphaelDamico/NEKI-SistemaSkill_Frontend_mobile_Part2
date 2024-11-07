import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    arrowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    pageCounter: {
        fontWeight: "600",
        color: THEME.COLORS.BLUE_700,
    }
});