export interface ButtonProps {
  bgColor?: string;
  buttonVh?: string;
  buttonVw?: string;
  buttonPadding?: number;
  buttonWidth?: number;
  buttonHeight?: number;
  buttonBorderWidth?: number;
  buttonRadius?: number;
  title: string;
  buttonBorderColor?: string;
  btnTextColor?: string;
  onPress?: any;
}

export interface Props {}

export interface Squares {
  id: number;
  selected?: any;
}
