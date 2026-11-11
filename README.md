# Gemeos Engenharia

Site institucional responsivo para apresentar os serviços da Gemeos Engenharia e
facilitar o contato de novos clientes.

## Como visualizar

Abra `index.html` diretamente no navegador ou publique os arquivos em um serviço
de hospedagem estática. Não há dependências ou etapa de compilação.

## Estrutura

- `index.html`: conteúdo semântico, navegação, serviços e formulário de contato.
- `css/style.css`: identidade visual, componentes e adaptações para desktop,
  tablet e celular.
- `js/script.js`: menu mobile acessível e validação do formulário, que prepara a
  mensagem para envio pelo WhatsApp.
- `imagens/obra.svg`: ilustração vetorial responsiva usada no hero.

## Decisões de interface

A paleta combina azul-escuro, neutros claros e dourado para destacar ações. A
tipografia sem serifa prioriza leitura em telas pequenas. O conteúdo é dividido
em seções curtas e cards de serviços; o CSS Grid organiza os cards e o contato,
com uma coluna em telas estreitas. O menu hambúrguer oferece controles de teclado
e estado acessível, e o formulário informa erros junto aos campos.

Para a demonstração, confira a página em uma largura desktop (por exemplo,
1440 px), tablet (768 px) e celular (375 px).

## Redundâncias removidas

- Os três cards que repetiam o mesmo título e texto genérico foram substituídos
  por descrições distintas de serviços.
- O formulário usa uma validação JavaScript única com mensagens junto aos campos,
  em vez de combinar alertas, verificações duplicadas de campos vazios e
  validação de e-mail repetida.
- O envio usa o link `wa.me`, que direciona ao WhatsApp adequado no dispositivo,
  sem detectar o navegador ou escolher entre duas URLs.
