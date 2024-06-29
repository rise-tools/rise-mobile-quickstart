import { Rise } from '@rise-tools/react'
import { createWSModelSource } from '@rise-tools/ws-client';
import {
  FormComponents,
  LucideIconsComponents,
  QRCodeComponents,
  SVGComponents,
  TamaguiComponents,
  useHapticsActions,
  useLinkingActions,
  useToastActions,
  RiseComponents,
} from '@rise-tools/kitchen-sink'

const components = {
  ...TamaguiComponents,
  ...RiseComponents,
  ...FormComponents,
  ...SVGComponents,
  ...LucideIconsComponents,
  ...QRCodeComponents,
}

const modelSource = createWSModelSource('ws://localhost:8888');

export default function HomeScreen() {
  return (
    <Rise
      modelSource={modelSource}
      components={components}
      path="incrementer"
      actions={{
        ...useToastActions(),
        ...useHapticsActions(),
        ...useLinkingActions(),
      }}
    />
  );
}
