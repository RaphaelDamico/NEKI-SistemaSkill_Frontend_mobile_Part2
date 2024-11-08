import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../../interfaces";
import { styles } from "./styles";

export default function ButtonComponent({ content, disabled, onPress, style }: ButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.button, style]}
        >
            <Text style={styles.buttonContent}>{content}</Text>
        </TouchableOpacity>
    );
};