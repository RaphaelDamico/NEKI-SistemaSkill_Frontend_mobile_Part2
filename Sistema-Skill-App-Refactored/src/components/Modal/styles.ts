import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    modalContainer: {
        position: "absolute",
        top: "30%",
        left: "22%",
        transform: [{ translateX: -0.5 * (80 + 20) }, { translateY: -0.5 * (30 + 8) }],
        backgroundColor: THEME.COLORS.WHITE,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 16,
        elevation: 10,
        zIndex: 1000,
        width: "80%",
        minHeight: "50%",
        justifyContent: "space-between"
    },
    modalOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.55)",
        zIndex: 999,
    },
    modalHeader: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: THEME.COLORS.GREY,
        height: 110,
    },

    headerTitle: {
        fontSize: 25,
        fontWeight: "600",
        color: THEME.COLORS.BLUE_700,
    },
    modalContent: {
        paddingHorizontal: 20,
        height: 180,
    },
    buttonInputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "100%",
        paddingHorizontal: "6%"
    },
    inputContainer: {
        width: "65%",
        left: "8%"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    modalEmptyText: {
        fontSize: 20,
        textAlign: "center",
        color: THEME.COLORS.BLUE_700,
        fontWeight: "600"
    },
});