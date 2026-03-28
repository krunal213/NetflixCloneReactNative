import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

function Splash() {
  const navigation = useNavigation();
  return (
    <LottieView
      source={require('@assets/animations/netflix_splash.json')}
      style={styles.container}
      autoPlay
      loop={false}
      onAnimationFinish={() => navigation.dispatch(StackActions.replace('GetStarted'))} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
});

export default Splash