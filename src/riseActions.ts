import { useExpoRouterActions } from "@rise-tools/kit-expo-router";
import {
  useHapticsActions,
  useLinkingActions,
  useToastActions,
} from "@rise-tools/kitchen-sink";

export function useRiseActions() {
  return {
    ...useHapticsActions(),
    ...useLinkingActions(),
    ...useToastActions(),
    ...useExpoRouterActions({ basePath: "rise" }),
  };
}
