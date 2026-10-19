// BOTÕES DO MENU
const selecionado = document.getElementById('cursoSelecionado')
const adicionar = document.getElementById('adicionar')
const remover = document.getElementById('remover')
const removerTodos = document.getElementById('removerTodos')
// OPÇÕES DE CURSOS
const cursos = [...document.getElementsByClassName('curso')]
// DISPLAY
const campoResultado = document.getElementById('campoResultado')
const displayVetor = document.getElementById('displayVetores')
// VARIÁVEIS
let cursoSelecionado = ''
let todosOsCursos = []


function limpaSeletor () {
    cursos.map((curso) => {
        curso.classList.remove('selecionado')
    })
}

cursos.map((curso) => {
    curso.addEventListener('click', () => {
        limpaSeletor()
        curso.classList.add('selecionado')

        cursoSelecionado = curso.innerHTML
    })
})


// MOSTRA O CURSO ESCOLHIDO
selecionado.addEventListener('click', () => {

    // SE NADA FOI SELECIONADO, EXIBE MENSAGEM
    if (!cursoSelecionado) campoResultado.innerHTML = 'Nada foi selecionado!'

    // SE NÃO, mostra o curso no campo resultado e no console
    else campoResultado.innerHTML = `${cursoSelecionado}`
})



// ADICIONA O CURSO NO VETOR
adicionar.addEventListener('click', () => {

    // Se nada foi selecionado, exibir mensagem
    if (!cursoSelecionado) campoResultado.innerHTML = `Nada foi selecionado!`


    // Se o curso já existir no vetor, exibir mensagem
    else if (todosOsCursos.includes(cursoSelecionado)) campoResultado.innerHTML = 'Curso já escolhido'


    // Caso contrário, guarda no vetor e mostra nos campos
    else {
    campoResultado.innerHTML = `${cursoSelecionado} adicionado`
    todosOsCursos.push(cursoSelecionado)
    displayVetor.innerHTML = `[ ${todosOsCursos} ]`
    }  
})



// REMOVE O CURSO DO VETOR
remover.addEventListener('click', () => {

    // Guarda o índice do curso que está dentro do vetor na variável pra usar depois
    const indice = todosOsCursos.indexOf(cursoSelecionado)

    // Se o vetor já estiver vazio, exibir mensagem
    if (todosOsCursos == "") campoResultado.innerHTML = 'Não existem cursos para remover!'


    // Se o elemento não existe no vetor, exibir mensagem
    else if (indice == -1) campoResultado.innerHTML = 'Este curso não foi adicionado!'


    // Se o elemento existir, remove e mostra nos campos
    else if (indice !== -1) {
        todosOsCursos.splice(indice, 1)
        console.log(todosOsCursos)
        campoResultado.innerHTML = `${cursoSelecionado} removido`
        displayVetor.innerHTML = `[ ${todosOsCursos} ]`
    }


    // Se todos foram removidos
    else if (todosOsCursos == "") {
        campoResultado.innerHTML = 'Todos foram removidos!'
        displayVetor.innerHTML = `[ ${todosOsCursos} ]`
    }
})



// REMOVE TODOS OS CURSOS DO VETOR
removerTodos.addEventListener('click', () => {

    // Se o vetor já estiver vazio, exibir mensagem
    if (todosOsCursos == "") campoResultado.innerHTML = 'Não existem cursos para remover!'


    // Caso contrário, remove tudo e mostra mensagem
    else {
    todosOsCursos = ""
    campoResultado.innerHTML = 'Todos os cursos foram removidos'
    displayVetor.innerHTML = `[ ${todosOsCursos} ]`
    }
})