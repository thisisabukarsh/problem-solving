const wayToLongWords = (word: string): string => {
  return word.length > 10
    ? `${word[0]}${word.length - 2}${word[word.length - 1]}`
    : word;
};

// Example usage:

console.log(wayToLongWords("pneumonoultramicroscopicsilicovolcanoconiosis")); // Output: "p43s"
console.log(wayToLongWords("localization")); // Output: "l10n"
console.log(wayToLongWords("internationalization")); // Output: "i18n"
console.log(wayToLongWords("word")); // Output: "word"
