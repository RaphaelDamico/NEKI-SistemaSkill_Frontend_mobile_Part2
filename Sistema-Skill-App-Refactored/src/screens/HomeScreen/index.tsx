import React, { useEffect, useState } from "react";
import { Alert, View, TextInput } from "react-native";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Card from "../../components/Card";
import DeleteModal from "../../components/DeleteModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Page, UserSkill } from "../../interfaces";
import { deleteUserSkill, getUserSkills } from "../../api";
import { styles } from "./styles";
import Input from "../../components/Input";
import Pagination from "../../components/Pagination";

export default function HomeScreen() {
    const [userSkillList, setUserSkillList] = useState<Page<UserSkill> | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [skillToDelete, setSkillToDelete] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState<string>("");
    const [filter, setFilter] = useState<string>("");
    const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined); const [page, setPage] = useState(0);
    const [size] = useState(3);
    const [sort] = useState("skill.skillName,asc");

    useEffect(() => {
        getUserSkillsList();
    }, [page, size, sort, filter]);

    const getUserSkillsList = async () => {
        try {
            const userId = await AsyncStorage.getItem("userId");
            if (!userId) {
                throw new Error("User ID não encontrado");
            }
            const data = await getUserSkills(page, size, sort, filter);
            if (data) {
                setUserSkillList({ ...data });
            } else {
                setUserSkillList(null);
            }

        } catch (error) {
            console.error(error);
        }
    };

    const handleSaveSkills = async () => {
        await getUserSkillsList();
        handleCloseModal();
        Alert.alert("Skill adicionada à lista do usuário")
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenDeleteModal = (userSkillId: string) => {
        setSkillToDelete(userSkillId);
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setSkillToDelete(null);
    };

    const handleDeleteUserSkill = async (userSkillId: string) => {
        try {
            await deleteUserSkill(userSkillId);
            if (userSkillList?.content.length === 1 && page > 0) {
                setPage(page - 1);
            } else {
                await getUserSkillsList();
            }
            setIsDeleteModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleConfirmDelete = async () => {
        if (skillToDelete !== null) {
            await handleDeleteUserSkill(skillToDelete);
            handleCloseModal();
            Alert.alert("Skill deletada da lista do usuáro")
        }
    };

    function handleFilterChange(value: string) {
        setInputValue(value);
        if (timer) {
            clearTimeout(timer);
        }
        setTimer(setTimeout(() => {
            setFilter(value);
            setPage(0);
        }, 1000));
    };

    return (
        <View style={styles.container}>
            <Header setIsModalOpen={setIsModalOpen} />
            <Input
                value={inputValue}
                onChangeText={handleFilterChange}
                placeholder="Pesquisar skills do usuário"
                label={""}
            />
            {userSkillList && userSkillList.content ? (
                userSkillList.content.map((skill: UserSkill) => (
                    <Card
                        key={skill.userSkillId}
                        userSkill={skill}
                        deleteSkill={handleOpenDeleteModal}
                        refreshSkills={getUserSkillsList}
                    />
                ))
            ) : (
                <></>
            )}
            {userSkillList?.content && userSkillList.content.length > 0 ? (
                <Pagination
                    page={page}
                    handlePageChange={setPage}
                    totalPages={userSkillList?.totalPages || 0}
                />
            ) : <></>}
            <Modal
                isVisibleModal={isModalOpen}
                onCancel={handleCloseModal}
                onSave={handleSaveSkills}
                userSkills={userSkillList?.content || []}
            />
            <DeleteModal
                isVisibleModal={isDeleteModalOpen}
                onCancel={handleCloseDeleteModal}
                onDelete={handleConfirmDelete}
            />
        </View>
    );
}