document.addEventListener('DOMContentLoaded', function() {
    // Adiciona interatividade ao botão de "Carregar Mais"
    const loadMoreButton = document.getElementById('load-more-events');

    // Dados simulados para novos eventos
    const additionalEvents = [
        {
            title: 'Workshop de Robótica',
            date: '29 de Outubro de 2024',
            location: 'Laboratório 305',
            description: 'Aprenda a criar robôs utilizando tecnologias modernas e acessíveis.',
            link: 'evento4.html'
        },
        {
            title: 'Hackathon 2024',
            date: '10 de Novembro de 2024',
            location: 'Centro de Convenções',
            description: 'Participe do maior hackathon da região, com prêmios incríveis para os vencedores.',
            link: 'evento5.html'
        }
    ];

    loadMoreButton.addEventListener('click', function() {
        const eventSection = document.querySelector('.event-section');

        additionalEvents.forEach(event => {
            const article = document.createElement('article');
            article.className = 'event-item';
            article.innerHTML = `
                <h2>${event.title}</h2>
                <p>Data: ${event.date}</p>
                <p>Local: ${event.location}</p>
                <p>Descrição: ${event.description}</p>
                <a href="${event.link}">Saiba mais</a>
            `;
            eventSection.appendChild(article);

            // Adiciona a classe para animação
            setTimeout(() => {
                article.classList.add('show');
            }, 10); // Delay para garantir que a animação ocorra
        });

        loadMoreButton.disabled = true;
        loadMoreButton.textContent = 'Não há mais eventos';
    });
});
