import { View, StyleSheet } from 'react-native';
import { AppHeader, type HeaderAction } from '../../../AppHeader';

export function MyNetflix() {
  const headerActions: HeaderAction[] = [
    { icon: require('../../../../assets/icons/ic_search.png'),  onPress: () => console.log('Search') },
    { icon: require('../../../../assets/icons/ic_menu.png'),  onPress: () => console.log('Search') }
  ];
  return (
    <View style={myNetflix.container}>
      <AppHeader title={"My Netflix"} actions={headerActions} />
    </View>
  );
}

const myNetflix = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
});




