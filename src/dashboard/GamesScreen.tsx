import { View, StyleSheet } from 'react-native'
import { AppHeader, type HeaderAction } from './AppHeader';

export function GamesScreen() {
  const headerActions: HeaderAction[] = [
    { icon: 'magnify', onPress: () => console.log('Search') }
  ];
  return (
    <View style={gamesScreen.container}>
      <AppHeader title={"Games"} actions={headerActions} />
    </View>
  );
}

const gamesScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff'
  }
});