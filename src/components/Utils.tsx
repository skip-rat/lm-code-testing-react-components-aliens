
export function isAlphaNumeric(str: string): boolean {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) &&    // numeric (0-9)
      !(code > 64 && code < 91) &&    // upper alpha (A-Z)
      !(code > 96 && code < 123)) {   // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

export function isAlpha(str: string): boolean {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 64 && code < 91) &&
      !(code > 96 && code < 123)) {
      return false;
    }
  }
  return true;
};