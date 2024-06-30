import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { H2, Text, YStack } from 'tamagui';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <YStack style={styles.container}>
        <H2>This screen doesn't exist.</H2>
        <Link href="/" style={styles.link}>
          <Text>Go to home screen!</Text>
        </Link>
      </YStack>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
