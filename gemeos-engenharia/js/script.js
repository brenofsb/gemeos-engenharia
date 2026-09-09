const formContato = document.querySelector('.form-contato');

formContato.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const numerozap = '5571982555768';

    // Monta a mensagem utilizando \n para pular linhas
    const textoFormatado = `Olá! Meu nome é *${nome}*\n*Meu e-mail:* ${email}\n*Detalhes da Obra/Solicitação:*\n${mensagem}`;

    // Verifica se é um dispositivo móvel (celular/tablet)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Define a URL base ideal de acordo com o dispositivo
    const baseUrl = isMobile 
        ? 'https://api.whatsapp.com/send' 
        : 'https://web.whatsapp.com/send';

    // Gera o link final aplicando a codificação de caracteres
    const linkzap = `${baseUrl}?phone=${numerozap}&text=${encodeURIComponent(textoFormatado)}`;

    window.open(linkzap, '_blank');
});
