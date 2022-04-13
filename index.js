class Receita{
    constructor(id, titulo, dificuldade, ingredientes, instrucao, url, isVegana){
        this.id = id;
        this.titulo = titulo;
        this.dificuldade = dificuldade;
        this.ingredientes = ingredientes;
        this.instrucao = instrucao;
        this.url = url;
        this.isVegana = isVegana;
    }

    atualizaReceita(titulo, dificuldade, ingredientes, instrucao, url, isVegana){
        this.titulo = titulo;
        this.dificuldade = dificuldade;
        this.ingredientes = ingredientes;
        this.instrucao = instrucao;
        this.url = url;
        this.isVegana = isVegana;
    }
}

const listaReceitas = [];

const removerReceita = ((id) => {

    const indiceReceita = listaReceitas.findIndex((receita) =>{
        return receita.id === id;
    })

    if (indiceReceita === -1){
        return console.log("Receita não encontrada");
    }

    listaReceitas.splice(indiceReceita,1);
});

const buscarReceita = (termo) => {
    console.log("----Busca----");
    return listaReceitas.filter ((receita) => {
       return receita.titulo.toLowerCase().indexOf(termo) != -1;
    });
};

const atualizarReceita = (id, titulo, dificuldade, ingredientes, instrucao, url, isVegana) => {
    listaReceitas.forEach((receita) => {
        if(receita.id === id){
            receita.atualizaReceita(titulo, dificuldade, ingredientes, instrucao, url, isVegana);
            return "Receita atualizada com sucesso!";
        }
    });
};

const atualizarReceitaComFind = (id, titulo, dificuldade, ingredientes, instrucao, url, isVegana) => {
    listaReceitas.find((receita) => {

        const indiceReceita = listaReceitas.findIndex((receita) =>{
            return receita.id === id;
        })

        if (indiceReceita === -1){
            return console.log("Receita não encontrada");
        }else{
            receita.atualizaReceita(titulo, dificuldade, ingredientes, instrucao, url, isVegana);
            return "Receita atualizada com sucesso!";
        }
    });
};


const exibirReceitas = (listaReceitas) => {
    listaReceitas.forEach((receita) => {
        console.log("------------");
        console.log(`Titulo: ${receita.titulo}`);
        console.log("Ingredientes:");
        receita.ingredientes.forEach((ingrediente) => {
            console.log(`-${ingrediente}`);
        });

        console.log("É vegano? ", receita.vegano ? "Sim" : "Não");
        console.log("------------");
    });

}

function cadastrarReceita(id, nome, dificuldade, ingredientes, descricao, url, isVegana){
    let novaReceita = new Receita(id, nome, dificuldade, ingredientes, descricao, url, isVegana);
    listaReceitas.push(novaReceita);

}

const nomeEmpresa = "omma";

let receitaInicial = new Receita(1, "Misto Quente", "Iniciante", ["teste", "teste", "teste", "teste"], "aehuaheuaheuae", "https://www.google.com.br", false);

listaReceitas.push(receitaInicial);
cadastrarReceita(2, "Misto Quente1", "Iniciante", ["Pão", "Presunto", "Queijo", "Manteiga"], "Faz sanduba1", "https://www.google.com.br", false);
cadastrarReceita(3, "Quente2", "Iniciante", ["Pão", "Presunto", "Queijo", "Manteiga"], "Faz sanduba2", "https://www.google.com.br", false);
cadastrarReceita(4, "Quente3", "Iniciante", ["Pão", "Presunto", "Queijo", "Manteiga"], "Faz sanduba3", "https://www.google.com.br", false);

//exibirReceitas(listaReceitas);
//removerReceita(6);
//exibirReceitas(listaReceitas);

//console.log(buscarReceita("misto"));

atualizarReceitaComFind(1, "Cachorro Quente", "Iniciante", ["pão", "salsicha"], "bota o pão na salsicha", "https://www.google.com.br", false);


exibirReceitas(listaReceitas);