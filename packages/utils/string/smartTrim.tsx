/**
 * Trims and attempts to reset indentation of string.
 * (E.g. if every line is prefixed by a minimum of 2 leading spaces, we will remove those 2
 * leading spaces from each line.)
 *
 * We allow array of string as an "escape-hatch" to put empty line on the string on MDX files,
 * since if we put the empty line literally in the string literal, MDX will incorrectly parse it
 * as paragraph break and throws error.
 *
 * @param arg - string or array of string. If array of string is given, expects that the string
 *   is prefixed and suffixed by newline character.
 */
export default function smartTrim(arg: string | string[]) {
  const processedString = Array.isArray(arg) ? arg.join('') : arg;

  // `ambientSpaceIndentCount` computes '\n\s\s\s\s' -> 4, because there are 4 spaces
  const prefixWhitespaceMatch = processedString.match(/^\n[ ]*/);
  const ambientSpaceIndentCount = prefixWhitespaceMatch ? prefixWhitespaceMatch[0].length - 1 : -1;
  let temp = processedString;

  if (ambientSpaceIndentCount > 0) {
    const regex = new RegExp(`\\n${' '.repeat(ambientSpaceIndentCount)}`, 'g');
    temp = temp.replace(regex, '\n');
  }
  return temp.trim();
}
