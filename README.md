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

## Autor

<div style="background-color: #181818; display: flex; align-items: center; padding: 20px; border-radius: 10px;">
  <img src="https://avatars.githubusercontent.com/u/61233984?v=4" alt="Foto do Autor" width="100" style="border-radius: 50%; margin-right: 20px;" />
  <div style="color: white;">
    <h2 style="margin: 0; font-size: 1.5em;">Vicente de Sousa</h2>
    <p style="margin: 5px 0;">
      <img src="https://github.com/Vicente-ferrer/assetsRepository/blob/main/linkedin.png" alt="LinkedIn" width="20" style="vertical-align: middle; margin-right: 5px;" />
      <a href="https://www.linkedin.com/in/vicentedesousa" style="color: white; text-decoration: none;">LinkedIn</a>
    </p>
    <p style="margin: 5px 0;">
      <img src="https://github.com/Vicente-ferrer/assetsRepository/blob/main/instagram.png" alt="Instagram" width="20" style="vertical-align: middle; margin-right: 5px;" />
      <a href="https://www.instagram.com/vicentesousa__/" style="color: white; text-decoration: none;">Instagram</a>
    </p>
  </div>
</div>

