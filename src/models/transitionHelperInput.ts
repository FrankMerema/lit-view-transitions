export interface transitionHelperInput {
  skipTransition?: boolean;
  classNames?: string[];
  updateDOM(): Promise<void>;
}
