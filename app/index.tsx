import { modelSource } from '@/src/modelSource';
import { components } from '@/src/riseComponents';
import { useExpoRouterActions } from '@rise-tools/kit-expo-router';
import {
  useHapticsActions,
  useLinkingActions,
  useToastActions,
} from '@rise-tools/kitchen-sink';
import { Rise } from '@rise-tools/react';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <>
      <Rise
        modelSource={modelSource}
        components={components}
        path="incrementer"
        actions={{
          ...useHapticsActions(),
          ...useLinkingActions(),
          ...useToastActions(),
          ...useExpoRouterActions({}),
        }}
      />
      <Link
        href={{
          pathname: 'dynamic/home',
        }}
      >
        Go to Dynamic Home
      </Link>
    </>
  );
}
