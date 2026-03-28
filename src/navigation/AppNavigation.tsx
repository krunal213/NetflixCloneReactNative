import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Splash from '@view/splash/Splash';
import DashboardNavigation from './DashboardNavigation';
import GetStarted from '@view/getstarted/GetStarted';
import EmailVerification from '@view/emailverification/EmailVerification';
import SignIn from '@view/signin/SignIn';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    GetStarted: { verified?: boolean } | undefined;
    EmailVerification: undefined;
    SignIn: undefined;
};

export type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'EmailVerification'
>;

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="EmailVerification" component={EmailVerification} options={{
                    presentation: 'modal',
                    animation: 'slide_from_bottom',
                }} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="DashboardNavigation" component={DashboardNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}