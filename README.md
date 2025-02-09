# Gerador de Senhas Seguras

Uma aplicação web moderna para geração de senhas seguras, construída com Next.js e TypeScript.

## 🔐 Funcionalidades

- Geração de senhas criptograficamente seguras
- Personalização de comprimento (4-100 caracteres)
- Opções configuráveis:
  - Letras maiúsculas (A-Z)
  - Letras minúsculas (a-z)
  - Números (0-9)
  - Símbolos especiais (!@#$%^&*()_+-=[]{}|;:,.<>?)
- Cálculo da força da senha em tempo real
- Histórico das últimas 5 senhas geradas
- Cópia para área de transferência com um clique
- Interface responsiva e amigável

## 🛠️ Tecnologias

- Next.js 14
- TypeScript
- Tailwind CSS
- Web Crypto API
- Shadcn/ui

## 🚀 Como Executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/gerador-de-password.git

# Entre no diretório
cd gerador-de-password

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🔒 Segurança

- Utiliza `crypto.getRandomValues()` para geração de números aleatórios criptograficamente seguros
- Garante presença mínima de cada tipo de caractere selecionado
- Implementa embaralhamento seguro dos caracteres
- Calcula entropia da senha para avaliação da força

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Seu Nome - [@seu-usuario](https://github.com/seu-usuario)
