import { CommonResize } from '../../../../components/home/themes/common/common-resize';
import { DefaultResize } from '../../../../components/home/themes/default/default-resize';
import { HeartResize } from '../../../../components/home/themes/heart/heart-resize';
import { DayResize } from '../../../../components/home/themes/day/day-resize';
import { NightResize } from '../../../../components/home/themes/night/night-resize';

export const ChoseResizeTheme = (
  width: number,
  height: number,
  theme: string
) => {
  if (theme === 'default_full') {
    return (
      <>
        <CommonResize width={width} height={height} />
        <DefaultResize height={height} width={width} />
      </>
    );
  } else if (theme === 'heart_full') {
    return (
      <>
        <CommonResize width={width} height={height} />
        <HeartResize height={height} width={width} />
      </>
    );
  } else if (theme === 'heart_resize') {
    return (
      <>
        <CommonResize width={width} height={height} />
        <HeartResize height={height} width={width} />
      </>
    );
  } else if (theme === 'day_full') {
    return (
      <>
        <CommonResize width={width} height={height} />
        <DayResize height={height} width={width} />
      </>
    );
  } else if (theme === 'night_full') {
    return (
      <>
        <CommonResize width={width} height={height} />
        <NightResize height={height} width={width} />
      </>
    );
  } else if (theme === 'night_resize') {
    return (
      <>
        <CommonResize width={width} height={height} />
        <NightResize height={height} width={width} />
      </>
    );
  } else if (theme === 'day_resize') {
    return (
      <>
        <CommonResize width={width} height={height} />
        <DayResize height={height} width={width} />
      </>
    );
  } else {
    return (
      <>
        <CommonResize width={width} height={height} />
        <DefaultResize height={height} width={width} />
      </>
    );
  }
};
