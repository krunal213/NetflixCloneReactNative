import { View, StyleSheet } from 'react-native'
import { AppHeader, type HeaderAction } from '../../../AppHeader';

export function Games() {
  const headerActions: HeaderAction[] = [
    { icon: require('../../../../assets/icons/ic_search.png'),  onPress: () => console.log('Search') },
  ];
  return (
    <View style={games.container}>
      <AppHeader title={"Games"} actions={headerActions} />
    </View>
  );
}

const games = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff'
  }
});