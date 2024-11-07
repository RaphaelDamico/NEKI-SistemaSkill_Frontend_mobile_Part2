import { useEffect, useState } from "react";
import { ModalProps, Skill, UserSkillRequest, Page } from "../../interfaces";
import { addSkillToUser, getAllSkills } from "../../api";
import { styles } from "./styles";
import { FlatList, Text, TextInput, View } from "react-native";
import Button from "../Button";
import CardModal from "../CardModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../Input";
import Pagination from "../Pagination";
// import Pagination from "../Pagination";

export default function Modal({ isVisibleModal, onCancel, onSave, userSkills }: ModalProps) {
    const [skillsPage, setSkillsPage] = useState<Page<Skill> | null>(null);
    const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
    const [page, setPage] = useState(0);
    const [size] = useState(3);
    const [sort] = useState("skillName,asc");
    const [inputValue, setInputValue] = useState<string>("");
    const [filter, setFilter] = useState<string>("");
    const [timer, setTimer] = useState<NodeJS.Timeout | number | undefined>(undefined);(undefined);

    useEffect(() => {
        const getSkillsList = async () => {
            try {
                const data = await getAllSkills(page, size, sort, filter);
                const filteredSkills = (data?.content ?? []).filter(skill =>
                    !userSkills.some(userSkill => userSkill.skill.skillId === skill.skillId)
                );
                setSkillsPage({
                    content: filteredSkills,
                    size: data?.size ?? 0,
                    totalElements: data?.totalElements ?? 0,
                    totalPages: data?.totalPages ?? 0,
                    number: data?.number ?? 0,
                });
            } catch (error) {
                console.error("Erro ao buscar lista de habilidades:", error);
            }
        };
        getSkillsList();
    }, [userSkills, page, size, sort, filter]);

    const handleChange = (skill: Skill) => {
        setSelectedSkills((prevSelected) => {
            if (prevSelected.some((s) => s.skillId === skill.skillId)) {
                return prevSelected.filter((s) => s.skillId !== skill.skillId);
            } else {
                return [...prevSelected, skill];
            }
        });

        const updatedSkills = skillsPage?.content.map((item) => {
            if (item.skillId === skill.skillId) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });
        if (updatedSkills && skillsPage) {
            setSkillsPage({ ...skillsPage, content: updatedSkills });
        }
    };

    const handleFilterChange = (value: string) => {
        setInputValue(value);
        if (timer) {
            clearTimeout(timer as number);
        }
        setTimer(setTimeout(() => {
            setFilter(value);
        }, 1000));
    };

    const handleSave = async () => {
        try {
            const userId = await AsyncStorage.getItem("userId");
            if (!userId) throw new Error("User ID não encontrado");
            const parsedUserId = JSON.parse(userId);
            const payload: UserSkillRequest[] = selectedSkills.map(skill => ({
                skillId: skill.skillId,
                userId: parsedUserId
            }));
            await addSkillToUser(payload);
            setSelectedSkills([]);
            onSave();
            setInputValue("");
            setFilter("");
            setPage(0);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancel = () => {
        setSelectedSkills([]);
        onCancel();
        setInputValue("");
        setFilter("");
        setPage(0);
    };

    return (
        <>
            {isVisibleModal && (
                <>
                    <View style={styles.modalOverlay} />
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.headerTitle}>Selecionar Skill</Text>
                            <Input
                                value={inputValue}
                                onChangeText={handleFilterChange}
                                placeholder="Pesquisar skills"
                                label={""}
                            />
                        </View>
                        <View style={styles.modalContent}>
                            {skillsPage?.content && skillsPage.content.length > 0 ? (
                                <FlatList
                                    contentContainerStyle={{ gap: 5 }}
                                    data={skillsPage.content}
                                    keyExtractor={(item) => item.skillId.toString()}
                                    renderItem={({ item }) => (
                                        <CardModal
                                            key={item.skillId}
                                            skill={item}
                                            onValueChange={() => handleChange(item)}
                                        />
                                    )}
                                />
                            ) : (
                                <Text style={styles.modalEmptyText}>Nenhuma skill disponível para adicionar.</Text>
                            )}
                        </View>
                        {skillsPage?.content && skillsPage.content.length > 0 ? (
                            <Pagination
                            page={page}
                            handlePageChange={setPage}
                            totalPages={skillsPage?.totalPages || 0}
                        />
                        ) : <></>}
                        <View style={styles.buttonContainer}>
                            <Button
                                content="Cancelar"
                                style={{ backgroundColor: "#D9534F", width: 100 }}
                                onPress={handleCancel}
                            />
                            <Button
                                content="Salvar"
                                style={{
                                    backgroundColor: selectedSkills.length === 0 ? "#D3D3D3" : "#356F7A",
                                    width: 100
                                }}
                                onPress={handleSave}
                                disabled={selectedSkills.length === 0}
                            />
                        </View>
                    </View>
                </>
            )}
        </>
    );
};
