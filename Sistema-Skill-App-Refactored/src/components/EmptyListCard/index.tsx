import { Text, View } from "react-native";
import { styles } from "./styles";

interface EmptyListCardProps {
    title: string;
    text: string;
}

export default function EmptyListCard({title, text}: EmptyListCardProps) {
    return(
        <View style={styles.cardContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}