const botao = document.getElementById('botao');

        botao.addEventListener('click', (event) => {
            const larguraJanela = window.innerWidth;
            const alturaJanela = window.innerHeight;

            const novaPosX = Math.random() * (larguraJanela - botao.clientWidth);
            const novaPosY = Math.random() * (alturaJanela - botao.clientHeight);

            botao.style.left = `${novaPosX}px`;
            botao.style.top = `${novaPosY}px`;
            
            // Impede a ação padrão de clique
            event.preventDefault();
        });