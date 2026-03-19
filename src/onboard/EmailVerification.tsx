// EmailVerification.tsx
import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { AppHeader, HeaderAction } from '../AppHeader';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../App';

export default function EmailVerification() {
  const [text, setText] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const headerActions: HeaderAction[] = [
    {
      icon: require('../../assets/icons/ic_close.png'),
      onPress: () => navigation.goBack(),
    },
  ];

  const navigateTo = () => {
    navigation.goBack();
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <AppHeader
        title="Verify Email"
        actions={headerActions}
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
        }}
      />

      <TextInput
        placeholder="Enter email"
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
        style={styles.input}
        onSubmitEditing={navigateTo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: '#444',
    color: '#fff',
    margin: 16,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
});