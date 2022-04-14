const fs = require("fs");

//carregando o arquivo em memorria
const rawData = fs.readFileSync("exemplo.json");

const pessoas = JSON.parse(rawData);

//criando algo novo pra add no json
const novaPessoa = {
    ...pessoas[0],
    nome: "Franscisco",
    email: "email@qualquer.com",
};

// adicionando na lista
pessoas.push(novaPessoa);

// salvando no json
fs.writeFileSync("exemplo.json", JSON.stringify(pessoas));