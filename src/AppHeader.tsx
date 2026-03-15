import React from 'react';
import {
  Animated,
  StyleProp,
  ViewStyle,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {
  Appbar,
  Text,
  TouchableRipple,
} from 'react-native-paper';

/**
 * Strict union:
 * Either icon OR label (never both)
 */
export type HeaderAction =
  | {
      icon: ImageSourcePropType;
      label?: never;
      onPress: () => void;
    }
  | {
      label: string;
      icon?: never;
      onPress: () => void;
    };

type AppHeaderProps = {
  title?: string;
  logo?: ImageSourcePropType;
  actions?: HeaderAction[];
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
};

const DEFAULT_HEADER_STYLE: StyleProp<ViewStyle> = {
  backgroundColor: '#121212',
  elevation: 0,
};

export function AppHeader({
  title,
  logo,
  actions = [],
  style,
}: AppHeaderProps) {
  return (
    <Appbar.Header style={[DEFAULT_HEADER_STYLE, style]}>
      
      {/* LEFT SIDE (LOGO OR TITLE) */}
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {logo ? (
          <Image
            source={logo}
            style={{
              width: 56,
              height: 56,
              resizeMode: 'contain',
            }}
          />
        ) : (
          <Text
            variant="titleLarge"
            style={{ color: 'white', fontSize: 20, paddingLeft: 12  }}
          >
            {title}
          </Text>
        )}
      </View>

      {/* RIGHT SIDE ACTIONS */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {actions.map((action, index) => (
          <TouchableRipple
            key={index}
            onPress={action.onPress}
            borderless
          >
            <View style={{ paddingHorizontal: 12 }}>
              {'icon' in action ? (
                <Image
                  source={action.icon}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: 'white',
                    resizeMode: 'contain',
                  }}
                />
              ) : (
                <Text style={{ color: 'white' }}>
                  {action.label}
                </Text>
              )}
            </View>
          </TouchableRipple>
        ))}
      </View>

    </Appbar.Header>
  );
}