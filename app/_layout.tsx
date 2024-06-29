import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { TamaguiProvider, createTamagui } from 'tamagui'
import { config } from '@tamagui/config/v3'

const tamaguiConfig = createTamagui(config)

type Conf = typeof tamaguiConfig
declare module '@tamagui/core' { // or 'tamagui'
  interface TamaguiCustomConfig extends Conf { }
}

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack>
        <Stack.Screen name="+not-found" />
      </Stack>
    </TamaguiProvider>
  );
}
