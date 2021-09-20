import { SvgProps } from './svgProps';
import { useTypedSelector } from '../../../hooks';

import { ChoseResizeTheme } from '../../../helpers';

export const Resize = ({ width, height }: SvgProps) => {
  const theme = useTypedSelector((state:any) => state.theme.currentTheme);
  return ChoseResizeTheme(width, height, theme);
};
