 const formContato = document.querySelector('.form-contato');
const camposContato = [
  {
    input: document.getElementById('nome'),
    erro: document.getElementById('erro-nome'),
    mensagem: 'Informe seu nome.',
  },
  {    input: document.getElementById('email'),
    erro: document.getElementById('erro-email'),
    mensagem: 'Informe um e-mail válido.',
  },
  {
    input: document.getElementById('mensagem'),
    erro: document.getElementById('erro-mensagem'),
    mensagem: 'Escreva uma mensagem sobre seu projeto.',
  },
];
const statusFormulario = document.querySelector('.form-status');

camposContato.forEach(({ input, erro }) => {
  input.addEventListener('input', () => {
    input.removeAttribute('aria-invalid');
    erro.textContent = '';
  });
});

formContato.addEventListener('submit', (event) => {
  event.preventDefault();
  statusFormulario.textContent = '';

  let primeiroCampoInvalido;

  camposContato.forEach(({ input, erro, mensagem }) => {
    input.value = input.value.trim();
    const vazio = input.value === '';
    const emailInvalido = input.type === 'email' && !vazio && !input.checkValidity();
    const mensagemErro = vazio
      ? mensagem
      : emailInvalido
        ? 'Informe um endereço de e-mail válido.'
        : '';

    erro.textContent = mensagemErro;
    if (mensagemErro) {
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
    }

    if (mensagemErro && !primeiroCampoInvalido) {
      primeiroCampoInvalido = input;
    }
  });

  if (primeiroCampoInvalido) {
    primeiroCampoInvalido.focus();
    return;
  }

  const numeroWhatsApp = '5571982555768';
  const texto = `Olá! Meu nome é *${camposContato[0].input.value}*\nMeu e-mail: ${camposContato[1].input.value}\n\nDetalhes do projeto:\n${camposContato[2].input.value}`;
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  statusFormulario.textContent = 'Abrindo o WhatsApp para você enviar sua mensagem.';
  window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
});

const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('navegacao');

function fecharMenu() {
  nav.classList.remove('ativo');
  btnMenu.setAttribute('aria-expanded', 'false');
  btnMenu.setAttribute('aria-label', 'Abrir menu');
}

btnMenu.addEventListener('click', () => {
  const menuAberto = btnMenu.getAttribute('aria-expanded') === 'true';
  btnMenu.setAttribute('aria-expanded', String(!menuAberto));
  btnMenu.setAttribute('aria-label', menuAberto ? 'Abrir menu' : 'Fechar menu');
  nav.classList.toggle('ativo', !menuAberto);
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    fecharMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && btnMenu.getAttribute('aria-expanded') === 'true') {
    fecharMenu();
    btnMenu.focus();
  }
});

window.matchMedia('(min-width: 701px)').addEventListener('change', fecharMenu);
