let database = [
  {
    id: 1,
    title: 'JavaScript',
    description: 'Do básico ao avançado.',
    image: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png',
    nameTeacher: 'Bruce',
    listClass: ['http://aula1.com', 'http://aula2.com', 'http://aula3.com']
  },
  {
    id: 2,
    title: 'HTML5 e CSS3',
    description: 'Do básico de HTML e CSS',
    image: 'https://blog.4linux.com.br/wp-content/uploads/2018/03/Melhor-Curso-de-HTML5-e-CSS3-1900x946_c.png',
    nameTeacher: 'Bruce',
    listClass: ['http://aula1.com', 'http://aula2.com', 'http://aula3.com']
  },
];

const criarCurso = (title, description, image, nameTeacher, listClass) => {
  const course = {
    id: 3,
    title,
    description,
    image,
    nameTeacher,
    listClass
  }

  database.push(course)

  return database;
};

const exibirCurso = (id) => {
  return database.find(course => course.id === id);
};

const atualizarCurso = (id, title, description, image, nameTeacher, listClass) => {
  const course = database.find(item => item.id === id);

  course.title = title;
  course.description = description;
  course.image = image;
  course.nameTeacher = nameTeacher;
  course.listClass = listClass;

  return course;
};

const deletarCurso = (id) => {
  const course = database.findIndex(item => item.id === id);

  if (course !== -1) {
    database.splice(course, 1)
  }

  return database;
};

const listaCursos = () => {
  return database;
};

/**
 * criarCurso: Recebe todos os dados por parâmetro
 * e adiciona na lista de cursos como objeto.
 */

console.log("------- CRIA CURSO ------- ")
console.log(criarCurso(
  "Titulo do curso",
  "Descrição do curso",
  "Caminho da imagem do curso",
  "Nome do Professor",
  ["Link da aula"]
))

/**
 * exibirCurso: recebe o id de um curso por parâmetro
 * e imprime todos os dados do curso selecionado.
 */

console.log("------- EXIBE CURSO ------- ")
console.log(exibirCurso(1))


/**
 * atualizarCurso: recebe todos os dados por parâmetro 
 * e atualiza na lista de cursos.
 */

console.log("------- ATUALIZA CURSO ------- ")
console.log(atualizarCurso(
  2,
  "Titulo do curso atualizado",
  "Descrição do curso atualizado",
  "Caminho da imagem do curso atualizado",
  "Nome do Professor atualizado",
  ["Link da aula atualizado"]
))

/**
 * deletarCurso: recebe o id por parâmetro
 * e remove o curso selecionado da lista.
 */

console.log("------- DELETA CURSO ------- ")
console.log(deletarCurso(1))

/**
 * listaCursos: imprime todos os cursos.
 */

console.log("------- LISTA TODOS OS CURSOS ------- ")
console.log(listaCursos())