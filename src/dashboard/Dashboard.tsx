import { Provider as PaperProvider, Icon, MD2DarkTheme } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home';
import { Clips } from './Clips';
import { Games } from './Games';
import { MyNetflix } from './MyNetflix';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  const theme = {
    ...MD2DarkTheme,
    colors: {
      ...MD2DarkTheme.colors,
      primary: '#f41414ff',
    },
  };

  return (
    <PaperProvider theme={theme}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#121212',
              borderTopWidth: 0,
            },
            tabBarActiveTintColor: '#ffffff',
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <Icon source={focused ? require('../../assets/icons/ic_home_filled.png') : require('../../assets/icons/ic_home.png')}
                  color={color}
                  size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Clips"
            component={Clips}
            options={{
              tabBarLabel: 'Clips',
              tabBarIcon: ({ color, focused }) => (
                <Icon source={focused ? require('../../assets/icons/ic_clips_filled.png') : require('../../assets/icons/ic_clips.png')}
                  color={color}
                  size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Games"
            component={Games}
            options={{
              tabBarLabel: 'Games',
              tabBarIcon: ({ color, focused }) => (
                <Icon source={focused ? require('../../assets/icons/ic_games_filled.png') : require('../../assets/icons/ic_games.png')}
                  color={color}
                  size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="My Netflix"
            component={MyNetflix}
            options={{
              tabBarLabel: 'My Netflix',
              tabBarIcon: ({ color, focused }) => (
                <Icon source={focused ? require('../../assets/icons/ic_profile_filled.png') : require('../../assets/icons/ic_profile.png')}
                  color={color}
                  size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    </PaperProvider>
  );
}
