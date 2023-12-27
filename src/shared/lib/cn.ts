export const cn = (...styles: string[]): string => {
  const mergedStyles = Object.assign({}, styles);
  return Object.values(mergedStyles).join(' ');
}
