export function isRTL(locale: string) {
  return locale === "ar";
}

export function dirClass(
  direction: "ltr" | "rtl",
  ltrClass: string,
  rtlClass: string,
) {
  return direction === "rtl" ? rtlClass : ltrClass;
}
