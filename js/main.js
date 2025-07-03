// Espera o DOM (a estrutura da página) ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as perguntas da lista de FAQ
    const questions = document.querySelectorAll('.faq-question');

    // Para cada pergunta encontrada, adiciona um "ouvinte de evento" de clique
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            // Remove a classe 'is-open' de todas as outras perguntas
            // Isso garante que apenas uma resposta fique aberta por vez
            questions.forEach(function(item) {
                if (item !== question) { // Se não for a pergunta que foi clicada
                    item.classList.remove('is-open');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            // Adiciona ou remove a classe 'is-open' na pergunta clicada
            this.classList.toggle('is-open');

            // Seleciona a resposta correspondente à pergunta clicada
            const answer = this.querySelector('.faq-answer');

            // Verifica se a pergunta está aberta (tem a classe 'is-open')
            if (this.classList.contains('is-open')) {
                // Se estiver aberta, define o max-height com o tamanho real da resposta
                // Isso faz a resposta aparecer com a animação CSS
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                // Se não, volta o max-height para null (o que a esconde)
                answer.style.maxHeight = null;
            }
        });
    });
});