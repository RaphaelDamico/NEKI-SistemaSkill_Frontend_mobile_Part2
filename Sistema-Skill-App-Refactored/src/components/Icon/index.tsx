import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleProp, ViewStyle } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



interface IconProps {
    name: keyof typeof icons | string;
    style?: StyleProp<ViewStyle>;
    color?: string | JSX.Element;
    size?: number | string;
    onPress?: () => void;
};

const icons = {
    eyeClosed: {
        component: Octicons,
        name: "eye-closed"
    },
    viewOpen: {
        component: Octicons,
        name: "eye"
    },
    trash: {
        component: FontAwesome6,
        name: "trash-alt"
    },
    edit: {
        component: FontAwesome6,
        name: "edit"
    },
    check: {
        component: FontAwesome,
        name: "check"
    },
    logout: {
        component: SimpleLineIcons,
        name: "logout"
    },
    arrowRight: {
        component: AntDesign,
        name: "arrowright"
    },
    arrowLeft: {
        component: AntDesign,
        name: "arrowleft"
    },
    arrowDown: {
        component: MaterialIcons,
        name: "keyboard-arrow-down"
    },
    arrowUp: {
        component: MaterialIcons,
        name: "keyboard-arrow-up"
    }
};

export default function Icon({ name, style, color, size, onPress }: IconProps) {
    const iconData = icons[name as keyof typeof icons];

    if (!iconData) return null;

    const IconComponent = iconData.component;

    return (
        <IconComponent
            name={iconData.name}
            style={style}
            color={color}
            size={size}
            onPress={onPress}
        />
    );
}
