import { View, StyleSheet } from 'react-native';
import { AppHeader, type HeaderAction } from './AppHeader';

export function MyNetflixScreen() {
  const headerActions: HeaderAction[] = [
    { icon: 'magnify', onPress: () => console.log('Search') },
    { icon: 'menu', onPress: () => console.log('Search') }
  ];
  return (
    <View style={myNetflixScreen.container}>
      <AppHeader title={"My Netflix"} actions={headerActions} />
    </View>
  );
}

const myNetflixScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
});




