interface PasswordOptions {
  useUppercase: boolean;
  useLowercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
}

const CHARS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

export function generateSecurePassword(length: number, options: PasswordOptions): string {
  if (length < 4) throw new Error('Password length must be at least 4 characters');
  
  // Verificar se pelo menos uma opção está ativa
  if (!Object.values(options).some(Boolean)) {
    throw new Error('At least one character type must be selected');
  }

  // Criar pool de caracteres baseado nas opções
  let chars = '';
  if (options.useUppercase) chars += CHARS.uppercase;
  if (options.useLowercase) chars += CHARS.lowercase;
  if (options.useNumbers) chars += CHARS.numbers;
  if (options.useSymbols) chars += CHARS.symbols;

  // Garantir pelo menos um caractere de cada tipo selecionado
  let password = '';
  if (options.useUppercase) password += CHARS.uppercase[crypto.getRandomValues(new Uint32Array(1))[0] % CHARS.uppercase.length];
  if (options.useLowercase) password += CHARS.lowercase[crypto.getRandomValues(new Uint32Array(1))[0] % CHARS.lowercase.length];
  if (options.useNumbers) password += CHARS.numbers[crypto.getRandomValues(new Uint32Array(1))[0] % CHARS.numbers.length];
  if (options.useSymbols) password += CHARS.symbols[crypto.getRandomValues(new Uint32Array(1))[0] % CHARS.symbols.length];

  // Completar o resto da senha
  const remainingLength = length - password.length;
  const array = new Uint32Array(remainingLength);
  crypto.getRandomValues(array);
  
  for (let i = 0; i < remainingLength; i++) {
    password += chars[array[i] % chars.length];
  }

  // Embaralhar a senha final
  return shuffleString(password);
}

function shuffleString(str: string): string {
  const array = str.split('');
  const randomValues = new Uint32Array(array.length);
  crypto.getRandomValues(randomValues);
  
  for (let i = array.length - 1; i > 0; i--) {
    const j = randomValues[i] % (i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  
  return array.join('');
}

export function calculatePasswordEntropy(password: string): number {
  const poolSize = 
    (/[A-Z]/.test(password) ? 26 : 0) +
    (/[a-z]/.test(password) ? 26 : 0) +
    (/[0-9]/.test(password) ? 10 : 0) +
    (/[^A-Za-z0-9]/.test(password) ? 32 : 0);
  
  return Math.floor(password.length * Math.log2(poolSize));
}
