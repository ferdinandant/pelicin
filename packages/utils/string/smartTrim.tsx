export default function smartTrim(string) {
  const prefixWhitespaceMatch = string.match(/^\n[ ]*/);
  // '\n\s\s\s\s' -> 4, because there are 4 spaces
  const ambientSpaceIndentCount = prefixWhitespaceMatch ? prefixWhitespaceMatch[0].length - 1 : -1;
  let temp = string;

  if (ambientSpaceIndentCount > 0) {
    const regex = new RegExp(`\\n${' '.repeat(ambientSpaceIndentCount)}`, 'g');
    temp = temp.replace(regex, '\n');
  }
  return temp.trim();
}
