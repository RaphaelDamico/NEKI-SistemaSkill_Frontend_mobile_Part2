import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: THEME.COLORS.WHITE,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 16,
        alignSelf: "center",
        elevation: 10,
        width: "90%",
        marginBottom: 20,
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 25,
    },
    infoContent: {
        maxWidth: "80%",
        gap: 8,
        right: 12,
        bottom: 5,
    },

    title: {
        fontSize: 20,
        fontWeight: "600",
        color: THEME.COLORS.BLUE_700,
    },
    description: {
        color: THEME.COLORS.BLUE_700,
        fontWeight: "600",
        lineHeight: 18
    },
    buttonContainer: {
        width: "100%",
        justifyContent: "flex-end",
        flexDirection: "row",
        gap: 20
    }
});