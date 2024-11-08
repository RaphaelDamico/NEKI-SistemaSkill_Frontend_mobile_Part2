import { Pressable, Text, View } from "react-native";
import { CardModalProps } from "../../interfaces";
import { styles } from "./styles";
import CustomCheckbox from "../Checkbox";
import { THEME } from "../../styles/theme";

export default function CardModal({ skill, onValueChange }: CardModalProps) {
    return (
        <View style={styles.cardModalContainer}>
            <Pressable
                style={styles.cardModalContainer}
                onPress={onValueChange}
            >
                <View style={styles.cardModalContent}>
                    <Text style={{ color: THEME.COLORS.WHITE, fontWeight: "600", fontSize: 20 }}>{skill.skillName}</Text>
                    <View>
                        <CustomCheckbox
                            value={skill.checked || false}
                            onValueChange={onValueChange}
                        />
                    </View>
                </View>
            </Pressable>
        </View>
    );
};