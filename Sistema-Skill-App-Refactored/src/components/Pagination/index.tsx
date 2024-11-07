import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "../Icon";

interface PaginationProps {
    page: number;
    handlePageChange: (page: number | ((prev: number) => number)) => void;
    totalPages: number;
}

export default function Pagination({ page, handlePageChange, totalPages }: PaginationProps) {
    return (
        <View style={styles.arrowContainer}>
            <TouchableOpacity
                style={[page === 0 && { opacity: 0.5 }]}
                disabled={page === 0}
                onPress={() => {
                    if (page > 0) handlePageChange((prev) => prev - 1);
                }}
            >
                <Icon name="arrowLeft" size={30} color="#1A374B" />
            </TouchableOpacity>
            <Text style={styles.pageCounter}>
                {page + 1}/{totalPages}
            </Text>
            <TouchableOpacity
                style={[page === totalPages -1 && { opacity: 0.5 }]}
                disabled={page === totalPages -1}
                onPress={() => {
                    if (page < totalPages - 1) handlePageChange((prev) => prev + 1);
                }}
            >
                <Icon name="arrowRight" size={30} color="#1A374B" />
            </TouchableOpacity>
        </View>
    );
}
