import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';

function SplashScreen() {
  return (
    <LottieView
      source={require('../../assets/animations/netflix_splash.json')}
      style={styles.container}
      autoPlay
      loop={false} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
});

export default SplashScreen