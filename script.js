// Função para enviar mensagem pelo WhatsApp (seu código original)
function enviarWhats(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();
    
    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = "5511993987773"; // Seu número com código do país
    
    // Formata a mensagem
    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    
    // Cria a URL do WhatsApp
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    
    // Abre em nova aba
    window.open(url, '_blank');
}

