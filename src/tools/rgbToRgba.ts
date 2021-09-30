export const RGBA = (rgb: string, a: number) => {
  return rgb.slice(0, 3) + "a" + rgb.slice(3, -1) + "," + a + ")";
};
export const RGB = (rgba: string) => {
  return rgba.slice(0, 3) + rgba.slice(4, -6) + ")";
};
