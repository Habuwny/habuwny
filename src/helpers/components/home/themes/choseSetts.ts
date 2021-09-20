import { defaultFullSetts } from './default-full-setts';
import { defaultResizeSetts } from './default-resize-setts';
import { heartFullSetts } from './heart-full-setts';
import { heartResizeSetts } from './heart-resize-setts';
import { dayFullSetts } from './day-full-setts';
import { dayResizeSetts } from './day-resize-setts';
import { nightFullSetts } from './night-full-setts';
import { nightResizeSetts } from './night-resize-setts';

export const choseSetts = (theme: string) => {
  if (theme === 'default_full') {
    return defaultFullSetts();
  } else if (theme === 'default_resize') {
    return defaultResizeSetts();
  } else if (theme === 'heart_full') {
    return heartFullSetts();
  } else if (theme === 'heart_resize') {
    return heartResizeSetts();
  } else if (theme === 'day_full') {
    return dayFullSetts();
  } else if (theme === 'day_resize') {
    return dayResizeSetts();
  } else if (theme === 'night_full') {
    return nightFullSetts();
  } else if (theme === 'night_resize') {
    return nightResizeSetts();
  }
};
