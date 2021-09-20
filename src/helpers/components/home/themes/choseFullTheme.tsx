import { CommonFull } from '../../../../components/home/themes/common/common-full';
import { DefaultFull } from '../../../../components/home/themes/default/default-full';
import { HeartFull } from '../../../../components/home/themes/heart/heart-full';
import { DayFull } from '../../../../components/home/themes/day/day-full';
import { NightFull } from '../../../../components/home/themes/night/night-full';

export const ChoseFullTheme = (
  width: number,
  height: number,
  theme: string
) => {
  if (theme === 'default_resize') {
    return (
      <>
        <CommonFull width={width} height={height} />
        <DefaultFull height={height} width={width} />
      </>
    );
  } else if (theme === 'heart_full') {
    return (
      <>
        <CommonFull width={width} height={height} />
        <HeartFull height={height} width={width} />
      </>
    );
  } else if (theme === 'night_full') {
    return (
      <>
        <CommonFull width={width} height={height} />
        <NightFull height={height} width={width} />
      </>
    );
  } else if (theme === 'night_resize') {
    return (
      <>
        <CommonFull width={width} height={height} />
        <NightFull height={height} width={width} />
      </>
    );
  } else if (theme === 'day_full') {
    return (
      <>
        <CommonFull width={width} height={height} />
        <DayFull height={height} width={width} />
      </>
    );
  } else if (theme === 'day_resize') {
    return (
      <>
        <CommonFull width={width} height={height} />
        <DayFull height={height} width={width} />
      </>
    );
  } else if (theme === 'heart_resize') {
    return (
      <>
        <CommonFull width={width} height={height} />
        <HeartFull height={height} width={width} />
      </>
    );
  } else {
    return (
      <>
        <CommonFull width={width} height={height} />
        <DefaultFull height={height} width={width} />
      </>
    );
  }
};
