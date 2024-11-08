import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../Button";
import { styles } from "./styles";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useAuthUser } from "../../contexts/AuthUserContext";
import Icon from "../Icon";
import { HeaderProps } from "../../interfaces";
import { THEME } from "../../styles/theme";

export default function Header({ setIsModalOpen }: HeaderProps) {
    const [username, setUsername] = useState<string | null>(null);
    const { signOut } = useAuthUser();

    useEffect(() => {
        const loadUsername = async () => {
            const savedUsername = await AsyncStorage.getItem("savedUsername");
            setUsername(savedUsername);
        };
        loadUsername();
    }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.wellcomeAndLogoutContent}>
                <Button
                    content={
                        <Icon
                            name="logout"
                            color={THEME.COLORS.WHITE}
                            size={18}
                        />
                    }
                    style={{ backgroundColor: THEME.COLORS.BLUE_700, width: 80 }}
                    onPress={signOut}
                />
                <Text style={styles.wellcomeText}>Bem vindo(a) {username ? username : "Usuário"}</Text>
            </View>
            <View style={styles.listSkillsAndAddButtonContent}>
                <Text style={styles.listSkillsText}>Lista de Skills</Text>
                <Button
                    content={"+ Adicionar skill"}
                    style={{ backgroundColor: THEME.COLORS.BLUE_700, width: 180 }}
                    onPress={handleOpenModal}
                />
            </View>
        </View>
    );
};