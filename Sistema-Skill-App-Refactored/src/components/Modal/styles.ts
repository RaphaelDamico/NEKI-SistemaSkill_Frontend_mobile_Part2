import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        position: "absolute",
        top: "30%",
        left: "22%",
        transform: [{ translateX: -0.5 * (80 + 20) }, { translateY: -0.5 * (30 + 8) }],
        backgroundColor: "#F9F9F9",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
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
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.55)",
        zIndex: 999,
    },
    modalHeader: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#DDD",
        height: 120,
        marginBottom: 20
    },

    headerTitle: {
        fontSize: 25,
        fontWeight: "600",
        color: "#356F7A"
    },
    modalContent: {
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    modalEmptyText: {
        fontSize: 20,
        textAlign: "center",
        color: "#356F7A",
        fontWeight: "600"
    },
});