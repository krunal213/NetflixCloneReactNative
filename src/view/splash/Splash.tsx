import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { AppDispatch } from "../../store";
import { splashAsyncThunk } from "./splashAsyncThunk";
import { useEffect, useState } from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

function Splash() {
  const navigation = useNavigation();
  const { isUserLogin } = useSelector((state: RootState) => state.splash);
  const dispatch = useDispatch<AppDispatch>();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (isUserLogin) {
      navigation.dispatch(StackActions.replace('GetStarted'));
    }
  }, [isUserLogin]);

  const handleOnAnimationFinish = () => {
    setShowLoader(true)
    dispatch(splashAsyncThunk());
  };

  return (
    <View style={styles.root}>
      <LottieView
        source={require('@assets/animations/netflix_splash.json')}
        style={styles.container}
        autoPlay
        loop={false}
        onAnimationFinish={handleOnAnimationFinish}
      />
      {showLoader && (
        <ActivityIndicator animating={true} color={MD2Colors.red700} size={'large'}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
  },
  container: {
    width: '100%',
    aspectRatio: 2,
    backgroundColor: "black",
  },
});

export default Splash;