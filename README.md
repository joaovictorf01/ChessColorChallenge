# Desafio das Casas

O "Desafio das Casas" é um jogo interativo desenvolvido para ajudar usuários a praticar e testar seu conhecimento sobre as cores das casas em um tabuleiro de xadrez. Utilizando a notação algébrica do xadrez, o jogo desafia o jogador a identificar se a casa indicada é branca ou preta.

## Funcionalidades

- **Início Personalizado**: Os usuários começam o jogo inserindo seu nome, personalizando a experiência de jogo.
- **Geração Aleatória de Casas**: Cada rodada gera uma nova casa aleatória no tabuleiro de xadrez, desafiando o conhecimento do jogador.
- **Escolha de Cor**: Os jogadores selecionam se acreditam que a casa é branca ou preta, testando sua habilidade de reconhecer padrões no tabuleiro.
- **Feedback Imediato**: Após cada tentativa, o jogo informa se a resposta estava correta ou não, e atualiza a pontuação do jogador.
- **Pontuação**: O jogo mantém uma pontuação baseada no número de respostas corretas.
- **Acessibilidade**: Suporte a leitores de tela e navegação simplificada para tornar o jogo acessível a todos.
- **Sair a Qualquer Momento**: Os jogadores podem optar por sair do jogo a qualquer momento, com um simples clique no botão de saída.

## Tecnologias Utilizadas

- **Angular**: Framework utilizado para o desenvolvimento do frontend, aproveitando recursos como componentes standalone para uma arquitetura mais moderna e simplificada.
- **TypeScript**: Linguagem de programação adotada para garantir maior consistência no código e aproveitar os recursos de tipagem estática.
- **HTML5 e CSS3**: Utilizados para a estruturação e estilização da interface do usuário, garantindo uma experiência limpa e responsiva.
- **ARIA**: Técnicas e atributos ARIA são utilizados para melhorar a acessibilidade e a experiência de usuários com necessidades especiais.

## Como Jogar

1. **Acesso ao Jogo**: O jogo pode ser acessado via navegador compatível com as tecnologias web modernas.
2. **Iniciar o Jogo**: O usuário deve começar inserindo seu nome para personalizar a experiência.
3. **Jogar**: Após o início, o jogo apresentará uma casa aleatória e o jogador deve selecionar se a casa é branca ou preta.
4. **Pontuação e Feedback**: A pontuação é atualizada com base nas respostas corretas, e feedback é dado após cada resposta.

## Como Configurar e Rodar Localmente

Para rodar o "Desafio das Casas" localmente, siga os passos abaixo:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
ng serve
