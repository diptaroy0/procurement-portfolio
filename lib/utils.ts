export function cn(
  ...classes: (string | false | undefined | null)[]
) {
  return classes.filter(Boolean).join(" ");
}

export function delay(index: number, step = 0.1) {
  return index * step;
}

export function yearsSince(year: number) {
  return new Date().getFullYear() - year;
}