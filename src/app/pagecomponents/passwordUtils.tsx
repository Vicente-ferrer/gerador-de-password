interface PasswordOptions {
  useUppercase: boolean;
  useLowercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
}

export const generatePassword = (
  length: number,
  options: PasswordOptions
): string => {
  let charset = "";
  if (options.useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (options.useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (options.useNumbers) charset += "0123456789";
  if (options.useSymbols) charset += "!@#$%^&*()_+{}[]|:;<>,.?";

  let newPassword = "";
  for (let i = 0; i < length; i++) {
    newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return newPassword;
};

export const checkPasswordStrength = (password: string): number => {
  let strength = 0;
  const patterns = [/[A-Z]/, /[a-z]/, /[0-9]/, /[!@#$%^&*()_+]/];
  patterns.forEach((pattern) => {
    if (pattern.test(password)) strength++;
  });
  return strength;
};
