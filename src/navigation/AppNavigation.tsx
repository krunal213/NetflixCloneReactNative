import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Splash from '../splash/view/Splash';
import Dashboard from '../dashboard/navigation/DashboardNavigation';
import GetStarted from '../onboard/getstarted/view/GetStarted';
import EmailVerification from '../onboard/emailverification/view/EmailVerification';
import SignIn from '../onboard/signin/view/SignIn';

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
                <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}