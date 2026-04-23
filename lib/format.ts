export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function splitTitle(title: string, highlightedWords: string[] = []) {
  if (!highlightedWords.length) {
    return [{ text: title, highlighted: false }];
  }

  let remaining = title;
  const parts: Array<{ text: string; highlighted: boolean }> = [];

  for (const highlighted of highlightedWords) {
    const index = remaining.indexOf(highlighted);

    if (index === -1) continue;

    const before = remaining.slice(0, index);
    if (before) {
      parts.push({ text: before, highlighted: false });
    }

    parts.push({ text: highlighted, highlighted: true });
    remaining = remaining.slice(index + highlighted.length);
  }

  if (remaining) {
    parts.push({ text: remaining, highlighted: false });
  }

  return parts.length ? parts : [{ text: title, highlighted: false }];
}
