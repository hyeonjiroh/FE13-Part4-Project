export interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType: InputType;
  errorMessage?: string[] | undefined;
  mode?: 'resetPasswordPage' | undefined;
  onInputBlur?: (
    key: InputType
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange?: (
    key: InputType
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputType = 'email' | 'password' | 'userName' | 'passwordConfirm';
