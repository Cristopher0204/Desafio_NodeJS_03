// import * as dotenv from 'dotenv'
const dotenv = require("dotenv");
const express = require("express");
const readline = require("readline-sync");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT = parseInt(process.env.PORT);
console.log(PORT);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);

    // CÓDIGO PARA ATENDER OS REQUERIMENTOS

    let quantidadeDeAlunos = Number(readline.question('Quantos alunos são? \n'))

    let maiorNota;
    let melhorAluno;

    for (index = 1; index <= quantidadeDeAlunos; index++) {
        let nome = readline.question(`Informe o nome do ${index} aluno: \n`)
        let nota = Number(readline.question(`Informe a nota do ${index} aluno: \n`))

        if (index === 1) {
            maiorNota = nota;
            melhorAluno = nome;
        } else {
            if (nota > maiorNota) {
                maiorNota = nota;
                melhorAluno = nome;
            }
        }
    }

    console.log(`O melhor aluno(a) foi ${melhorAluno}, tendo a nota ${maiorNota}.`)

});
