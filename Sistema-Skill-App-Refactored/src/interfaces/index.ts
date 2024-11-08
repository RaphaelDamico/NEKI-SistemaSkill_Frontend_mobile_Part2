import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
    content: string | React.ReactNode;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    width?: string | number;
    height?: string | number;
    disabled?: boolean;
};

export interface CardProps {
    userSkill: UserSkill;
    deleteSkill: (userId: string) => void;
    refreshSkills: () => void;
};

export interface CardModalProps {
    skill: Skill;
    onValueChange: () => void;
};

export interface CustomCheckboxProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
    label?: string;
    accessibilityLabelledBy?: string;
    id?: string;
};

export interface DeleteModalProps {
    isVisibleModal: boolean;
    onCancel: () => void;
    onDelete: () => void;
};

export interface InputProps {
    label?: string;
    type?: string;
    value: string | undefined;
    onChangeText: (text: string) => void;
    placeholder?: string;
    name?: string;
    id?: string;
    hasIcon?: boolean;
};

export interface HeaderProps {
    setIsModalOpen: (value: boolean) => void;
};

export interface ModalProps {
    isVisibleModal: boolean;
    onCancel: () => void;
    onSave: () => void;
    userSkills: UserSkill[];
};

export interface StarRatingProps {
    rating: number;
    onRatingChange: (newRating: number) => void;
    isEditing: boolean;
    onSave: () => void;
};

export interface AuthUserContextProps {
    username: string;
    setUsername: (username: string) => void;
    password: string;
    setPassword: (password: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    loginUser: () => Promise<void>;
    signOut: () => Promise<void>;
    signed: boolean;
};

export interface RegisterUserContextProps {
    username: string;
    setUsername: (username: string) => void;
    password: string;
    setPassword: (password: string) => void;
    confirmPassword: string;
    setConfirmPassword: (confirmPassword: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
};

export type RootPublicStackParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
};

export type RootPrivateStackParamList = {
    HomeScreen: undefined;
};

export interface NavigationContextProps {
    navigation: NavigationProp<ParamListBase>;
};

export interface NavigationProviderProps {
    children: ReactNode;
};

export interface IUserCredentials {
    username: string;
    password: string;
};

export interface Skill {
    skillId: string;
    skillName: string;
    description: string;
    image: string;
    checked?: boolean;
};

export interface SkillModel {
    skillId: string;
    skillName: string;
    description: string;
    image: string;
};

export interface Page<T> {
    content: T[];
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
};

export type PageSkillModel = Page<SkillModel>;

export interface UserSkillRequest {
    skillId: string;
    userId: string;
};

export interface UserSkill {
    userSkillId: string;
    skill: Skill;
    level?: number;
};

export interface UserSkillResponse {
    userId: string;
    username?: string;
    userSkills: UserSkill[];
};

export interface UpdateUserSkill {
    userSkillId: string;
    level: number;
};

export interface UpdateUserSkillLevelResponse {
    success: boolean;
    message: string;
};

export type PageUserSkill = Page<UserSkill>;