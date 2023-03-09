import { FONTS } from '../enums';

export const importFonts = (() => {
  let fontSet = [];
  FONTS.forEach(font =>
    fontSet.push(
      `https://fonts.googleapis.com/css2?family=${font.name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s/g, '+')}:wght@${font.weights.join(';')}&display=swap`
    )
  );
  return fontSet;
})();
