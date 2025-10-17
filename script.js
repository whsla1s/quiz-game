document.addEventListener('DOMContentLoaded', () => {

const allQuestions = [
    {
        question: "Qual tag HTML é usada para criar um parágrafo?",
        answers: [ { text: "<p>", correct: true }, { text: "<h1_>", correct: false }, { text: "<par>", correct: false }, { text: "<br>", correct: false } ]
    },
    {
        question: "O que a sigla HTML significa?",
        answers: [ { text: "Hyper Text Markup Language", correct: true }, { text: "High Tech Modern Language", correct: false }, { text: "Hyperlinks and Text Markup Language", correct: false }, { text: "Home Tool Markup Language", correct: false } ]
    },
    {
        question: "Qual tag é usada para criar um link em HTML?",
        answers: [ { text: "<link_>", correct: false }, { text: "<href>", correct: false }, { text: "<a>", correct: true }, { text: "<url>", correct: false } ]
    },
    {
        question: "Qual o propósito da tag `<div>` em HTML?",
        answers: [ { text: "Criar um container genérico para agrupar elementos", correct: true }, { text: "Inserir uma imagem", correct: false }, { text: "Definir o título da página", correct: false }, { text: "Criar uma lista ordenada", correct: false } ]
    },
    {
        question: "Qual atributo HTML especifica o texto alternativo para uma imagem, caso ela não possa ser exibida?",
        answers: [ { text: "title", correct: false }, { text: "src", correct: false }, { text: "alt", correct: true }, { text: "description", correct: false } ]
    },
    {
        question: "Qual das seguintes tags é um exemplo de elemento de bloco (block-level element)?",
        answers: [ { text: "<span>", correct: false }, { text: "<a>", correct: false }, { text: "<img>", correct: false }, { text: "<h1>", correct: true } ]
    },
    {
        question: "Para que serve a tag `<head>` em um documento HTML?",
        answers: [ { text: "Para conter o conteúdo principal da página", correct: false }, { text: "Para conter metadados sobre o documento, como título e links para CSS", correct: true }, { text: "Para criar o cabeçalho visível da página", correct: false }, { text: "Para agrupar todos os scripts da página", correct: false } ]
    },
    {
        question: "Qual tag é usada para criar uma lista não ordenada (com marcadores)?",
        answers: [ { text: "<ol_>", correct: false }, { text: "<list>", correct: false }, { text: "<ul>", correct: true }, { text: "<dl>", correct: false } ]
    },
    {
        question: "Qual tag semântica do HTML5 é mais apropriada para conter o conteúdo principal de uma página?",
        answers: [ { text: "<section>", correct: false }, { text: "<article>", correct: false }, { text: "<main>", correct: true }, { text: "<content>", correct: false } ]
    },
    {
        question: "O que significa CSS?",
        answers: [ { text: "Creative Style Sheets", correct: false }, { text: "Cascading Style Sheets", correct: true }, { text: "Computer Style Sheets", correct: false }, { text: "Colorful Style Sheets", correct: false } ]
    },
    {
        question: "Qual propriedade CSS é usada para alterar a cor do texto de um elemento?",
        answers: [ { text: "font-color", correct: false }, { text: "text-color", correct: false }, { text: "color", correct: true }, { text: "background-color", correct: false } ]
    },
    {
        question: "Como você seleciona um elemento com o id 'titulo' em CSS?",
        answers: [ { text: ".titulo", correct: false }, { text: "#titulo", correct: true }, { text: "titulo", correct: false }, { text: "*titulo", correct: false } ]
    },
    {
        question: "Qual propriedade é usada para alterar a cor de fundo de um elemento?",
        answers: [ { text: "color", correct: false }, { text: "bgcolor", correct: false }, { text: "background-color", correct: true }, { text: "background", correct: false } ]
    },
    {
        question: "Qual é a sintaxe correta para incluir um arquivo CSS externo em uma página HTML?",
        answers: [ { text: "<style src='estilo.css'>", correct: false }, { text: "<link rel='stylesheet' type='text/css' href='estilo.css'>", correct: true }, { text: "<stylesheet>estilo.css</stylesheet>", correct: false }, { text: "<css href='estilo.css'>", correct: false } ]
    },
    {
        question: "O que a propriedade `display: none;` faz?",
        answers: [ { text: "Deixa o elemento transparente", correct: false }, { text: "Remove o elemento do fluxo da página, tornando-o invisível", correct: true }, { text: "Apenas esconde o texto do elemento", correct: false }, { text: "Move o elemento para trás de outros elementos", correct: false } ]
    },
    {
        question: "Qual propriedade CSS controla o espaçamento interno de um elemento?",
        answers: [ { text: "margin", correct: false }, { text: "padding", correct: true }, { text: "border", correct: false }, { text: "spacing", correct: false } ]
    },
    {
        question: "Para criar um layout flexível, qual valor da propriedade `display` é comumente utilizado no container?",
        answers: [ { text: "block", correct: false }, { text: "inline", correct: false }, { text: "grid", correct: false }, { text: "flex", correct: true } ]
    },
    {
        question: "Qual seletor CSS tem a maior especificidade?",
        answers: [ { text: "Seletor de tipo (ex: 'p')", correct: false }, { text: "Seletor de classe (ex: '.minha-classe')", correct: false }, { text: "Seletor de ID (ex: '#meu-id')", correct: true }, { text: "Seletor universal ('*')", correct: false } ]
    },
    {
        question: "O que a pseudo-classe `:hover` faz?",
        answers: [ { text: "Aplica um estilo quando o usuário clica no elemento", correct: false }, { text: "Aplica um estilo quando o usuário passa o mouse sobre o elemento", correct: true }, { text: "Aplica um estilo ao primeiro filho de um elemento", correct: false }, { text: "Aplica um estilo a um link já visitado", correct: false } ]
    },
    {
        question: "Dentro de qual tag HTML colocamos o código JavaScript?",
        answers: [ { text: "<javascript>", correct: false }, { text: "<js>", correct: false }, { text: "<script>", correct: true }, { text: "<scripting>", correct: false } ]
    },
    {
        question: "Como se declara uma variável em JavaScript que pode ter seu valor alterado?",
        answers: [ { text: "const", correct: false }, { text: "let", correct: true }, { text: "var", correct: false }, { text: "static", correct: false } ]
    },
    {
        question: "Qual método é usado para selecionar um elemento HTML pelo seu ID em JavaScript?",
        answers: [ { text: "document.querySelector('#id')", correct: false }, { text: "document.getElementById('id')", correct: true }, { text: "document.getElement('id')", correct: false }, { text: "As duas primeiras opções estão corretas", correct: false } ]
    },
    {
        question: "Qual é o operador de igualdade estrita (verifica valor e tipo) em JavaScript?",
        answers: [ { text: "==", correct: false }, { text: "=", correct: false }, { text: "===", correct: true }, { text: "!=", correct: false } ]
    },
    {
        question: "O que o método `addEventListener` faz?",
        answers: [ { text: "Remove um evento de um elemento", correct: false }, { text: "Cria um novo elemento HTML", correct: false }, { text: "Adiciona uma função para ser chamada quando um evento específico ocorre", correct: true }, { text: "Altera o estilo de um elemento", correct: false } ]
    },
    {
        question: "Qual das seguintes opções é um tipo de dado primitivo em JavaScript?",
        answers: [ { text: "Array", correct: false }, { text: "Object", correct: false }, { text: "String", correct: true }, { text: "Function", correct: false } ]
    },
    {
        question: "O que o JSON (JavaScript Object Notation) representa?",
        answers: [ { text: "Uma linguagem de programação", correct: false }, { text: "Um formato leve de troca de dados, fácil para humanos lerem e máquinas analisarem", correct: true }, { text: "Uma biblioteca JavaScript para animações", correct: false }, { text: "Um método para estilizar páginas web", correct: false } ]
    },
    {
        question: "Qual função é usada para imprimir algo no console do navegador?",
        answers: [ { text: "print()", correct: false }, { text: "log.console()", correct: false }, { text: "console.log()", correct: true }, { text: "document.write()", correct: false } ]
    },
    {
        question: "Qual o resultado de `'5' + 3` em JavaScript?",
        answers: [ { text: "8", correct: false }, { text: "'53'", correct: true }, { text: "Erro", correct: false }, { text: "undefined", correct: false } ]
    },
    {
        question: "O que o método `Array.push()` faz?",
        answers: [ { text: "Remove o último elemento de um array", correct: false }, { text: "Adiciona um ou mais elementos ao final de um array", correct: true }, { text: "Inverte a ordem dos elementos em um array", correct: false }, { text: "Remove o primeiro elemento de um array", correct: false } ]
    },
    {
        question: "Para que serve a palavra-chave `return` dentro de uma função?",
        answers: [ { text: "Para encerrar a execução da função e, opcionalmente, especificar um valor a ser retornado", correct: true }, { text: "Para declarar uma nova variável", correct: false }, { text: "Para iniciar um loop", correct: false }, { text: "Para importar um módulo externo", correct: false } ]
    },
    {
        question: "Qual é a forma correta de se criar uma função em JavaScript?",
        answers: [ { text: "function = minhaFuncao() {}", correct: false }, { text: "function minhaFuncao() {}", correct: true }, { text: "create function minhaFuncao() {}", correct: false }, { text: "def minhaFuncao():", correct: false } ]
    },
    {
        question: "O que o `DOM` representa no contexto do desenvolvimento web?",
        answers: [ { text: "Um modelo de estilo para documentos", correct: false }, { text: "Uma linguagem de script do lado do servidor", correct: false }, { text: "Uma representação em árvore de um documento HTML/XML para manipulação via script", correct: true }, { text: "Um formato de arquivo de imagem", correct: false } ]
    },
    {
        question: "Qual objeto JavaScript permite trabalhar com datas e horas?",
        answers: [ { text: "Time", correct: false }, { text: "Date", correct: true }, { text: "Clock", correct: false }, { text: "Moment", correct: false } ]
    }
];

    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const endScreen = document.getElementById('end-screen');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const menuBtn = document.getElementById('menu-btn');
    const questionCounter = document.getElementById('question-counter');
    const scoreDisplay = document.getElementById('score');
    const questionText = document.getElementById('question-text');
    const answerButtons = document.getElementById('answer-buttons');
    const playerNameInput = document.getElementById('player-name');
    const finalResults = document.getElementById('final-results');
    const performanceMessage = document.getElementById('performance-message');
    let myChart;

    let shuffledQuestions, currentQuestionIndex, score;

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', startGame);

    menuBtn.addEventListener('click', () => {
        endScreen.classList.add('hide');
        startScreen.classList.remove('hide');
    });

    function startGame() {
        const playerName = playerNameInput.value;
        if (playerName.trim() === '') {
            alert('Por favor, digite seu nome para começar!');
            return;
        }

        if (myChart) {
            myChart.destroy();
        }

        startScreen.classList.add('hide');
        endScreen.classList.add('hide');
        quizScreen.classList.remove('hide');

        shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 15);
        currentQuestionIndex = 0;
        score = 0;
        scoreDisplay.innerText = score;
        
        showNextQuestion();
    }

    function showNextQuestion() {
        resetState();
        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        questionText.innerText = currentQuestion.question;
        questionCounter.innerText = `Pergunta ${currentQuestionIndex + 1} de ${shuffledQuestions.length}`;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtons.appendChild(button);
        });
    }

    function resetState() {
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const correct = selectedBtn.dataset.correct === 'true';

        if (correct) {
            score++;
            scoreDisplay.innerText = score;
        }

        Array.from(answerButtons.children).forEach(button => {
            setStatusClass(button, button.dataset.correct === 'true');
            button.disabled = true;
        });
        
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < shuffledQuestions.length) {
                showNextQuestion();
            } else {
                endGame();
            }
        }, 1200);
    }

    function setStatusClass(element, correct) {
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('incorrect');
        }
    }

    function endGame() {
        quizScreen.classList.add('hide');
        endScreen.classList.remove('hide');

        const totalQuestions = shuffledQuestions.length;
        const wrongAnswers = totalQuestions - score;
        const percentage = Math.round((score / totalQuestions) * 100);

        document.getElementById('player-name-final').innerText = playerNameInput.value;
        
        finalResults.innerHTML = `
            <ul>
                <li>Questões respondidas: <strong>${totalQuestions}</strong></li>
                <li>Acertos: <strong>${score}</strong></li>
                <li>Erros: <strong>${wrongAnswers}</strong></li>
                <li>Aproveitamento: <strong>${percentage}%</strong></li>
            </ul>
        `;

        if (percentage >= 80) {
            performanceMessage.innerText = "Excelente!";
        } else if (percentage >= 50) {
            performanceMessage.innerText = "Bom desempenho";
        } else {
            performanceMessage.innerText = "Precisa melhorar";
        }
        
        createResultsChart(score, wrongAnswers);
    }

    function createResultsChart(correct, wrong) {
        const ctx = document.getElementById('results-chart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Acertos', 'Erros'],
                datasets: [{
                    label: 'Desempenho',
                    data: [correct, wrong],
                    backgroundColor: [
                        '#28a745',
                        '#dc3545'
                    ],
                    borderColor: [
                        '#ffffff',
                        '#ffffff'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Proporção de Acertos e Erros'
                    }
                }
            }
        });
    }
});