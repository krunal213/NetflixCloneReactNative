
import { Animated, StyleProp, ViewStyle, ColorValue } from 'react-native';
import { Appbar } from 'react-native-paper';

export type HeaderAction = {
  icon: string;
  onPress: () => void;
};

type AppHeaderProps = {
  title?: any;
  actions?: HeaderAction[];
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
};

const DEFAULT_HEADER_STYLE: StyleProp<ViewStyle> = { backgroundColor: '#121212' };

export function AppHeader({ title, actions = [], style }: AppHeaderProps) {
  return (
    <Appbar.Header style={[DEFAULT_HEADER_STYLE, style]}>

      <Appbar.Content title={title} />

      {actions.map((action, index) => (
        <Appbar.Action
          key={index}
          icon={action.icon}
          onPress={action.onPress}
          iconColor={'white'}
        />
      ))}
    </Appbar.Header>
  );
}

