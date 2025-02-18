const lengthOfLongestSubstring = (s: string): number => {
  const uc: Set<string> = new Set();
  let maxLen = 0,
    right = 0,
    left = 0;
  while (right < s.length) {
    if (!uc.has(s[right])) {
      uc.add(s[right]);
      right++;
      maxLen = Math.max(maxLen, right - left);
    } else {
      uc.delete(s[left]);
      left++;
    }
  }
  return maxLen;
};

// Example usage:

console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 wke
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 abc
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 b
console.log(lengthOfLongestSubstring("")); // Output: 0
