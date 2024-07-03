import { modelSource } from '@/src/modelSource';
import { useRiseActions } from '@/src/riseActions';
import { components } from '@/src/riseComponents';
import { Rise } from '@rise-tools/react';

export default function HomeScreen() {
  return (
    <>
      <Rise
        modelSource={modelSource}
        components={components}
        path="home"
        actions={useRiseActions()}
      />
    </>
  );
}
