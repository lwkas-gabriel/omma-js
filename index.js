const fs = require("fs");

const nomeEmpresa = "Sistema Omma";
console.log(nomeEmpresa);

const abrirBancoDeDados = () => {
  const rawData = fs.readFileSync("data.json");
  return JSON.parse(rawData);
}

const salvarBancoDeDados = (listaDeReceitas) => {
  fs.writeFileSync("data.json", JSON.stringify(listaDeReceitas));
}

const cadastrarReceita = (
  // id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) => {
  

  const indiceUltimaReceita = listaDeReceitas.length - 1;

  const novaReceita = {
    id: listaDeReceitas.length === 0 ? 1 : listaDeReceitas[indiceUltimaReceita].id + 1,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };

  listaDeReceitas.push(novaReceita);

  salvarBancoDeDados(listaDeReceitas);

  // console.log("Cadastro da receita " + titulo + " feito com sucesso!");
  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};

const exibirReceitas = () => {
  const listaDeReceitas = abrirBancoDeDados();

  if(listaDeReceitas.length === 0){
    console.log("Lista de receitas vazia!");
  }

  listaDeReceitas.forEach((receita) => {
    const { titulo, ingredientes, vegano } = receita;
    console.log("--------------------------------");
    console.log(`Título: ${titulo}`);

    console.log("Ingredientes:");
    ingredientes.forEach((ingrediente) => {
      console.log(`- ${ingrediente}`);
    });

    console.log("É vegano? ", vegano ? "Sim" : "Não");
    console.log("--------------------------------");
  });

};

const deletarReceita = (id) => {

  const listaDeReceitas = abrirBancoDeDados();

  const indiceReceita = listaDeReceitas.findIndex((receita) => {
    return receita.id === id;
  });

  if (indiceReceita === -1) {
    return console.log("Receita não encontrada");
  }

  listaDeReceitas.splice(indiceReceita, 1);

  salvarBancoDeDados(listaDeReceitas);
  
  console.log("Receita deletada com sucesso!");
};

const buscarReceita = (termo) => {

  const listaDeReceitas = abrirBancoDeDados();

  return listaDeReceitas.filter((receita) => {
    return receita.titulo.toLowerCase().indexOf(termo.toLowerCase()) != -1;
  });
};

const atualizarReceita = (id, receitaAtualizada = {}) => {

  const rawData = fs.readFileSync("data.json");
  const listaDeReceitas = JSON.parse(rawData);

  const indiceReceita = listaDeReceitas.findIndex((receita) => {
    return receita.id === id;
  });

  if (indiceReceita === -1) {
    return console.log("Receita não encontrada");
  }

  const receitaOriginal = listaDeReceitas[indiceReceita]

  listaDeReceitas[indiceReceita] = {
    ...receitaOriginal,
    ...receitaAtualizada,
  };

  
  salvarBancoDeDados(listaDeReceitas);
  console.log(`Receita "${listaDeReceitas[indiceReceita].titulo}" atualizada com sucesso!`);

};

//Cadastra uma nova receita
// cadastrarReceita(
//   "Cachorro-quente",
//   "simples",
//   ["1 pão", "1 salsicha", "condimentos"],
//   "se ligae.",
//   "https://google.com",
//   false
// );

//exibirReceitas();

atualizarReceita(2, {vegano: "Misto"});