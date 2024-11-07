import { Text, View } from "react-native";
import Button from "../Button";
import { styles } from "./styles";
import { DeleteModalProps } from "../../interfaces";

export default function DeleteModal({ isVisibleModal, onCancel, onDelete }: DeleteModalProps) {

    return (
        <>
            {isVisibleModal &&
                <>
                    <View style={styles.modalOverlay} />
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={{color: "#356F7A", fontSize: 20, fontWeight: "500"}}>Deseja realmente deletar a Skill?</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                content={"Cancelar"}
                                style={{ backgroundColor: "#D9534F", width: 100 }}
                                width={100}
                                onPress={() => onCancel()}
                            />
                            <Button
                                content={"Deletar"}
                                style={{ backgroundColor: "#356F7A", width: 100 }}
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