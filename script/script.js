const selecionado = document.getElementById('cursoSelecionado')
const adicionar = document.getElementById('adicionar')
const remover = document.getElementById('remover')
const removerTodos = document.getElementById('removerTodos')
const campoResultado = document.getElementById('campoResultado')
const displayVetor = document.getElementById('displayVetores')
const cursos = [...document.getElementsByClassName('curso')]
const cursoSelecionado = ''
let cursoEscolhido = ''
let todosOsCursos = []



// MOSTRA O CURSO ESCOLHIDO
selecionado.addEventListener('click', () => {
    const inputSelecionado = document.querySelector('input[name="rad"]:checked')

    // SE NADA FOI SELECIONADO, EXIBE MENSAGEM
    if (!inputSelecionado) campoResultado.innerHTML = 'Nada foi selecionado!'

    // SE NÃO, mostra o curso no campo resultado e no console
    else {
    campoResultado.innerHTML = `${inputSelecionado.previousElementSibling.innerText}`
    console.log(inputSelecionado.previousElementSibling)
    }
})



// ADICIONA O CURSO NO VETOR
adicionar.addEventListener('click', () => {
    const inputSelecionado = document.querySelector('input[name="rad"]:checked')


    // Se nada foi selecionado, exibir mensagem
    if (!inputSelecionado) campoResultado.innerHTML = `Nada foi selecionado!`


    // Se o curso já existir no vetor, exibir mensagem
    else if (todosOsCursos.includes(inputSelecionado.previousElementSibling.innerText)) {
        campoResultado.innerHTML = 'Curso já escolhido'
    }


    // Caso contrário, guarda no vetor e mostra nos campos
    else {
    cursoEscolhido = inputSelecionado.previousElementSibling.innerText
    campoResultado.innerHTML = `${cursoEscolhido} adicionado`

    todosOsCursos.push(cursoEscolhido)
    console.log(todosOsCursos)

    displayVetor.innerHTML = `[ ${todosOsCursos} ]`
    }  
})



// REMOVE O CURSO DO VETOR
remover.addEventListener('click', () => {
    const inputSelecionado = document.querySelector('input[name="rad"]:checked')

    // Guarda o índice do curso que está dentro do vetor na variável pra usar depois
    const indice = todosOsCursos.indexOf(inputSelecionado.previousElementSibling.innerHTML)


    // Se o elemento não existe no vetor, exibir mensagem
    if (indice == -1) campoResultado.innerHTML = 'Este curso não foi adicionado!'


    // Se o elemento existir, remove e mostra nos campos
    else if (indice !== -1) {
        todosOsCursos.splice(indice, 1)
        console.log(todosOsCursos)
        displayVetor.innerHTML = `[ ${todosOsCursos} ]`
    }


    // Se todos foram removidos
    if (todosOsCursos == "") {
        campoResultado.innerHTML = 'Todos foram removidos!'
        displayVetor.innerHTML = `[ ${todosOsCursos} ]`
    }
})



// REMOVE TODOS OS CURSOS DO VETOR
removerTodos.addEventListener('click', () => {

    // Se o vetor já estiver vazio, exibir mensagem
    if (todosOsCursos == "") {campoResultado.innerHTML = 'Não existem cursos para remover!'}


    // Caso contrário, remove tudo e mostra mensagem
    else {
    todosOsCursos = ""
    campoResultado.innerHTML = 'Todos os cursos foram removidos'
    displayVetor.innerHTML = `[ ${todosOsCursos} ]`
    }
})