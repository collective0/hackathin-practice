export type StudyPlanRequest = {
  topic: string;
  availableMinutes: 15 | 30 | 60;
  focusLevel: "low" | "medium" | "high";
};

export type StudyPlan = {
  topic: string;
  summary: string;
  steps: {
    id: string;
    title: string;
    minutes: number;
    instructions: string;
  }[];
  recallQuestions: string[];
};

export type StudyPlanResponse =
  | { ok: true; plan: StudyPlan }
  | {
      ok: false;
      error: {
        code: "VALIDATION_ERROR" | "INTERNAL_ERROR";
        message: string;
      };
    };

export type StudyPlannerViewProps = {
  request: StudyPlanRequest;
  status: "idle" | "loading" | "success" | "error";
  plan: StudyPlan | null;
  error: string | null;
  onRequestChange: (request: StudyPlanRequest) => void;
  onSubmit: () => void;
  onUseSample: () => void;
};
