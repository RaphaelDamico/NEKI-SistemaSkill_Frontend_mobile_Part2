import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../Button";
import { StarRatingProps } from "../../interfaces";
import { THEME } from "../../styles/theme";

export default function StarRating({ rating, onRatingChange, isEditing, onSave }: StarRatingProps) {
    const [tempRating, setTempRating] = useState(rating);

    const handlePress = (index: number) => {
        if (isEditing) {
            setTempRating(index);
            onRatingChange(index);
        }
    };

    return (
        <View style={styles.starRatingContainer}>
            {Array.from({ length: 5 }, (_, index) => index + 1).map((star) => (
                <Text
                    key={star}
                    style={[
                        styles.star,
                        { color: star <= tempRating ? THEME.COLORS.YELLOW : THEME.COLORS.BLUE_700 }
                    ]}
                    onPress={() => handlePress(star)}
                >
                    ★
                </Text>
            ))}
            {isEditing && (
                <Button
                    content={"Salvar"}
                    onPress={onSave}
                    style={{ backgroundColor: THEME.COLORS.BLUE_700, width: 80 }}
                    width={70}
                />
            )}
        </View>
    );
};
