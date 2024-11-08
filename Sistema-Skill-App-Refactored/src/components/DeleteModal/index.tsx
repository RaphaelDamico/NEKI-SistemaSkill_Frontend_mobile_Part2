import { Text, View } from "react-native";
import Button from "../Button";
import { styles } from "./styles";
import { DeleteModalProps } from "../../interfaces";
import { THEME } from "../../styles/theme";

export default function DeleteModal({ isVisibleModal, onCancel, onDelete }: DeleteModalProps) {

    return (
        <>
            {isVisibleModal &&
                <>
                    <View style={styles.modalOverlay} />
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text
                                style={{ color: THEME.COLORS.BLUE_700, fontSize: 20, fontWeight: "500" }}
                            >
                                Deseja realmente deletar a Skill?
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                content={"Cancelar"}
                                style={{ backgroundColor: THEME.COLORS.RED, width: 100 }}
                                width={100}
                                onPress={() => onCancel()}
                            />
                            <Button
                                content={"Deletar"}
                                style={{ backgroundColor: THEME.COLORS.BLUE_700, width: 100 }}
                                width={100}
                                onPress={() => onDelete()}
                            />
                        </View>
                    </View>
                </>
            }
        </>
    );
}