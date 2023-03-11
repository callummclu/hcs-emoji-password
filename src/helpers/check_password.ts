export const inputValidation = (passwordInput: string, isEmoji: any) => {
  if (/\p{Extended_Pictographic}/u.test(passwordInput) || !isEmoji) {
    if (/\p{Extended_Pictographic}/u.test(passwordInput) && !isEmoji) {
      return true;
    }
    if (Array.from(passwordInput).length < 8) {
      return true;
    }
    return false;
  } else {
    if (passwordInput.length < 8) {
      return true;
    } else {
      return true;
    }
  }
};
