import { Rise } from '@rise-tools/react'
import {
  useHapticsActions,
  useLinkingActions,
  useToastActions,
} from '@rise-tools/kitchen-sink'
import { modelSource } from '@/src/modelSource';
import { components } from '@/src/riseComponents';

export default function HomeScreen() {
  return (
    <Rise
      modelSource={modelSource}
      components={components}
      path="incrementer"
      actions={{
        ...useHapticsActions(),
        ...useLinkingActions(),
        ...useToastActions(),
      }}
    />
  );
}
