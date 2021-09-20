import { SvgProps } from './svgProps';
import { useTypedSelector } from '../../../hooks';
import { ChoseFullTheme } from '../../../helpers';

export const Full = ({ width, height }: SvgProps) => {
  const theme = useTypedSelector((state:any) => state.theme.currentTheme);

  return ChoseFullTheme(width, height, theme);
};
