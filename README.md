# Pikassistent

Status do projeto: <span style="color: rgb(255, 230, 0)">Em Desenvolvimento</span>

## Descrição

Este projeto foi desenvolvido como uma aplicação interativa de assistente Pokémon, combinando elementos de jogos com recursos sociais. <br />
O Pikassistent oferece aos usuários uma experiência Pokémon abrangente, incluindo Pokédex, sistema gacha, chat online, sistema de ranking e autenticação de usuários através do Firebase.

Stakeholder do Projeto: HostinsVi

<!-- Link da Aplicação -->

## Tecnologias Utilizadas

- React 19
- CSS3
- React Router DOM
- Firebase (Autenticação & Firestore)
- Vite
- Node.js/Express (API)
- Framer Motion

## Funcionalidades

- Autenticação de Usuário (Email/Senha + Google)
- Pokédex Interativa
- Sistema Gacha
- Chat em Tempo Real
- Sistema de Ranking de Usuários
- Design Responsivo
- Seleção de Times (Vermelho, Amarelo, Azul)
- Gerenciamento de Perfil do Usuário

## Requisitos de Instalação

- Node.js (v16 ou superior)
- Gerenciador de Pacotes (npm/yarn)
- Conta Firebase
- Navegador Web Moderno

## Passos de Instalação e Execução

```bash
# Clone este repositório
git clone https://github.com/HostinsVi/Pikassistent.git

# Acesse os arquivos do projeto
cd Pikassistent

# Instale as dependências do frontend
cd project
npm install

# Instale as dependências do backend
cd ../API
npm install

# Configure as variáveis de ambiente
# Crie arquivos .env nos diretórios project/ e API/
# Verifique .env.example para as variáveis necessárias

# Inicie o servidor backend
cd API
node .

# Inicie a aplicação frontend
cd ../project
npm run dev
```

## Estrutura de Arquivos

```plaintext
├── project/                    # Aplicação React frontend
│   ├── src/
│   │   ├── assets/            # Imagens, configuração Firebase
│   │   ├── components/        # Componentes reutilizáveis
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   └── fastAccess/
│   │   ├── pages/             # Páginas da aplicação
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   ├── signUp/
│   │   │   ├── pokedex/
│   │   │   ├── gacha/
│   │   │   ├── chatbot/
│   │   │   ├── chatOnline/
│   │   │   └── ranking/
│   │   └── hooks/             # Hooks personalizados do React
│   └── public/                # Arquivos estáticos
├── API/                       # Servidor Express backend
│   ├── index.js              # Arquivo principal do servidor
│   └── package.json          # Dependências do backend
└── README.md
```

## Deploy

A aplicação será implantada usando plataformas de hospedagem modernas com deployments separados para frontend (Vercel/Netlify) e backend (Railway/Heroku).

## Formas de Contribuir

Você pode contribuir das seguintes formas:

- **Relatando Bugs:** Crie uma issue no GitHub ou entre em contato via email, todos os erros serão analisados e priorizados nas próximas atualizações;

- **Propondo melhorias:** Proponha novas funcionalidades ou melhorias através de issues no GitHub ou pull requests;

- **Contribuições de código:** Faça um fork do repositório, implemente suas alterações e submeta um pull request;

- **Compartilhando sua experiência:** Nos informe sobre sua experiência usando a aplicação, seu feedback é muito importante para nós.

## Seleção de Times

Os usuários podem escolher entre três times que serão exibidos no chat global:
- **Time Vermelho** 🔴
- **Time Amarelo** 🟡  
- **Time Azul** 🔵

## Visão Geral das Funcionalidades

- **Landing Page:** Página de boas-vindas com informações do projeto
- **Autenticação:** Sistema seguro de login/cadastro com Firebase
- **Dashboard Principal:** Hub central com acesso rápido a todas as funcionalidades
- **Pokédex:** Base de dados completa de Pokémon com informações detalhadas
- **Sistema Gacha:** Mecanismo de coleta para obter Pokémon
- **Sistema de Chat:** Comunicação em tempo real entre usuários
- **Sistema de Ranking:** Placar de líderes e estatísticas de usuários
- **Gerenciamento de Perfil:** Personalização e preferências do usuário