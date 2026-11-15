# 📚 WMK Book Studio

**Crie, escreva, leia e compartilhe seus livros digitais em português.**

O **WMK Book Studio** é um projeto de editor de eBooks com interface visual, organização por capítulos, pré-visualização de leitura, leitura em voz alta e ferramentas de publicação.

> **Estado atual:** protótipo web 0.1. Não é um diagramador profissional finalizado. Leia o [roadmap](roadmap.html) para conhecer os próximos passos.

![Logotipo WMK Book Studio](assets/logo.svg)

## ✨ Recursos implementados no protótipo

- Galeria de livros e criação de projetos.
- Edição de título, autor e capítulos; inclusão, exclusão e reorganização de capítulos.
- Escrita com editor de texto simples e visualização em formato de leitura.
- Armazenamento local automático no navegador (localStorage); exportação/importação de projeto JSON.
- Geração de arquivo HTML de leitura para compartilhar ou hospedar.
- Impressão / salvar como PDF pelo navegador (o resultado depende das configurações de impressão).
- Leitura em voz alta via Web Speech API, com seleção de vozes disponíveis no dispositivo, velocidade e controles.
- Compartilhamento: Facebook, WhatsApp, Telegram e compartilhamento nativo quando disponível; copiar texto ou link.
- Tema escuro, layout responsivo e interface em português do Brasil.
- Exemplo de livro demonstrativo.

**Atenção:** compartilhamento por link só funcionará para livros efetivamente **publicados em uma URL pública**. Projetos locais do navegador não são enviados automaticamente para a internet. O botão para compartilhar um livro local usa seu texto ou um HTML exportado; a publicação online com endereço individual é um recurso futuro.

## 🚀 Como executar

1. Baixe ou clone o repositório.
2. Abra `index.html` em um navegador atual (Chrome, Edge ou Firefox).
3. Use **Novo livro** para começar.
4. Para hospedar gratuitamente, ative o GitHub Pages a partir da branch `main`, pasta `/ (root)`.

Não é necessário instalar Node.js, Python ou bibliotecas para experimentar a versão 0.1.

## 📖 Como usar

1. Na biblioteca, crie um livro ou abra o exemplo.
2. Edite o título, o autor e o conteúdo de cada capítulo.
3. Clique em **Ler** para abrir o leitor e em **Ouvir** para iniciar a narração.
4. Em **Exportar**, baixe JSON para continuar editando depois, HTML para leitura ou use **Imprimir / PDF**.
5. Para divulgar, compartilhe um arquivo HTML hospedado publicamente ou envie um arquivo exportado.

## 🔒 Privacidade e limitações

- O conteúdo fica no armazenamento **do navegador e do perfil atual**. Limpar os dados do navegador pode apagá-lo. **Exporte JSON regularmente**.
- Não há servidor, login, colaboração em tempo real nem publicação automática.
- A Web Speech API depende de suporte, vozes e configuração do navegador/sistema operacional. Algumas vozes podem utilizar serviços externos.
- A exportação HTML realiza escape do conteúdo inserido para impedir execução de HTML arbitrário.
- Os compartilhamentos externos abrem os serviços escolhidos; não publicam automaticamente em sua conta.
- Recursos de IA, EPUB e diagramação avançada estão planejados, não implementados.

## 🛠️ Arquitetura v0.1

```text
index.html         Interface principal
styles.css         Estilos responsivos
app.js             Projetos, editor, leitor, exportação e compartilhamento
assets/logo.svg    Identidade visual vetorial
roadmap.html       Planejamento e progresso
```

O protótipo intencionalmente utiliza **HTML, CSS e JavaScript puro** para permitir testes rápidos em máquinas modestas. A migração futura para um editor estruturado com React/Tiptap deve ser orientada pelos testes e pela necessidade real de paginação.

## 🗺️ Próximos passos

- Diagramação com páginas, caixas de texto, imagens, camadas e templates.
- Modelos de livros infantis, apostilas, manuais e romances.
- EPUB 3 válido, PDF com paginação editorial, sumário automático e capa.
- Bibliotecas de recursos, importação DOCX/Markdown, histórico e backup SQLite.
- Assistentes de IA opcionais (Ollama, Groq, OpenAI) com revisão humana.
- Publicação online por livro com URL própria, QR Code e estatísticas opcionais.
- Empacotamento desktop Windows e automação de testes.

Acompanhe o [roadmap interativo](roadmap.html).

## 📄 Créditos e licença

Projeto **WMK Book Studio**  
**Walney Moreira Klein — walneyk@hotmail.com**

Código autoral da versão inicial. Licença ainda não definida: **a presença de código público no GitHub não concede automaticamente permissão de redistribuição ou uso comercial**. Definir um arquivo `LICENSE` antes de aceitar contribuições externas.
