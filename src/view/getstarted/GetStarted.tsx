import React from 'react';
import {
  StyleSheet,
  ImageBackground
} from 'react-native';
import { Button } from 'react-native-paper';
import { AppHeader, HeaderAction } from '../../AppHeader';
import { useNavigation } from '@react-navigation/native';

const GetStarted = () => {
  const navigation = useNavigation();

  const headerActions: HeaderAction[] = [
    { label: 'PRIVACY', onPress: () => console.log('Privacy') },
    { label: 'SIGN IN', onPress: () => console.log('Sign In') },
  ];

  return (
    <ImageBackground
      source={require('@assets/icons/ic_background_grid.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <AppHeader
        logo={require('@assets/icons/ic_netflix.png')}
        actions={headerActions}
        style={styles.header}
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('EmailVerification' as never)}
        style={styles.button}
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonLabel}
      >
        GET STARTED
      </Button>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  logo: {
    width: 100,
    height: 40,
  },
  button: {
    margin: 16,
    marginTop: 'auto', // 🔥 pushes button to bottom
    borderRadius: 6,
    backgroundColor: '#E50914', // Netflix red
  },
  buttonContent: {
    height: 50,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GetStarted;
