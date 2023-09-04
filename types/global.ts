export type ChatCompletionRequestMessage = {
  content: string | null;
  role: "system" | "user" | "assistant" | "function";
};

export type IUser = {
  id: string;
  email: string;
  count: number;
  isValidSubscription: boolean;
};