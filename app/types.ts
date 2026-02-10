export enum FocusMode {
  QUICK = "quick",
  DEEP = "deep",
}

export interface FocusPlan {
  summary: string;
  immediateNextAction: string;
  steps: string[];
  timeBlocks: {
    duration: string;
    activity: string;
  }[];
}

export interface PlanState {
  plan: FocusPlan | null;
  loading: boolean;
  error: string | null;
}
