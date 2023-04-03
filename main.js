const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickOnCookie = document.querySelector("#closedCookie")
const btnTry = document.querySelector('#btnTry')

const phrases = [
    'Não limite os seus desafios. Desafie os seus limites.',
    'Se o plano não funcionar, mude o plano, não a meta.',
    'Você é mais valente do que acredita, mais forte do que parece e está mais preparado do que imagina.',
    'Que os seus sonhos te levem para onde o seu coração seja feliz.',
    'Para ter sucesso, você deve eliminar dúvidas, aceitar desafios e rejeitar qualquer negatividade externa.',
    'O que você procura está procurando você.',
    'Uma meta é um sonho com um prazo.',
    'Tente mover o mundo - o primeiro passo será mover a si mesmo.',
    'Disciplina é a ponte entre metas e realizações.',
    'Sorte é o que acontece quando a preparação encontra a oportunidade.',
    'Se você não vivenciar o fracasso, não saberá reconhecer quando o sucesso realmente chegar.',
    'Quando saímos da nossa zona de conforto, todos os nossos sonhos se tornam possíveis.',
    'Você é mais forte do que as suas desculpas.',
    'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',
    'Uma longa viagem começa com um único passo.',
    'Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo.',
    'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
    'Quem quer colher rosas deve suportar os espinhos.',
    'É muito fácil conhecer palavras de motivação, o difícil é aplicá-las na sua vida.',
    'Deixe que as experiências de vida contabilizem a sua idade.',
    'Busque multiplicar sorrisos e subtrair tristezas em todos os dias da sua vida.',
    'Se você deseja alcançar a grandeza, haja como se fosse a pessoa mais confiante do mundo.',
    'Se você quiser que as coisas mudem, primeiro você tem que mudar.',
    'A chave do sucesso é começar antes de estar pronto.',
    'Ganhar não é tudo, mas querer ganhar é.',
    'Algumas pessoas querem que aconteça, algumas esperam que aconteça, outras fazem acontecer.',
    'Não tenha medo de desistir do que é bom para ir atrás do que é ótimo.',
    'Somos o que repetidamente fazemos. A excelência, portanto, não é um feito, mas um hábito.',
    'Acredite em milagres, mas não dependa deles.',
    'As realizações de hoje eram as impossibilidades de ontem.',
    'O impossível é apenas uma opinião.',
    'Um vencedor é um sonhador que nunca desiste.',
    'Caia sete vezes. Levante-se oito.', 
    'Quanto maior a dificuldade, maior é a glória.',
    'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
    'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.',
    'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
    'Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste.',
    'A diferença entre o possível e o impossível está na vontade humana.',
    'Você consegue o melhor dos outros quando você dá o melhor de você mesmo.',
    'Tente de novo. Fracasse de novo. Fracasse melhor.',
    'Pessoas que são loucas o suficiente para pensar que podem mudar o mundo, são aquelas que o fazem.',
    'Faça o que pode, com o que você tem, no lugar onde você está.',
    'Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo.',
    'Líderes pensam e falam sobre as soluções. Seguidores pensam e falam sobre os problemas.',
    'O melhor momento para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora.',
    'É difícil vencer uma pessoa que nunca desiste.'
  ];
  
  let randomPhrase = document.querySelector("#randomPhrase")
  let generateRandomPhrase

clickOnCookie.addEventListener('click', generatePhrase)
document.addEventListener('keydown', pressEnterKey)

function generatePhrase(){
    toggleScreen()

    generateRandomPhrase = Math.floor(Math.random()*(phrases.length));

    randomPhrase.innerText = phrases[generateRandomPhrase]
}

function buttonTry(event){
    event.preventDefault()
    toggleScreen()
}


function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnterKey(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        toggleScreen()
    }
}