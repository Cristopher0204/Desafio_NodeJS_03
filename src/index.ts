/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { rawListeners } from "process";
import { Console } from "console";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
});

console.log('sao quantos alunos?',(2));

 const aluno1 ={
	 nome1:'critopher',
	 nota1:65,
 };
 console.log(aluno1);

const aluno2 ={
	nomer2:'rafael',
	nota2:75,
};
console.log(aluno2);
 
let maiorNota = max(65,75);

console.log(maiorNota);

function max(nota1,nota2) {
return nota1>nota2 ? nota1: nota2;
};

 

