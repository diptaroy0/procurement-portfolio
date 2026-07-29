export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function delay(
  index: number,
  step = 0.1
): number {
  return index * step;
}

export function yearsSince(
  year: number
): number {
  const currentYear = new Date().getFullYear();

  return Math.max(0, currentYear - year);
}