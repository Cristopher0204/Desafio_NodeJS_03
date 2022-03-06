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

const readline = require('readline');

 let nome1 = "cristopher";
 let nota1 = 70;

 let nome2 = "fernando";
 let nota2 = 80;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 rl.question('quantos alunos são? ',() => {

 rl.question('nome aluno1? ', () =>   {

 rl.question('qual foi a sua nota? ',() => {
 console.log("parabens");

 rl.question('nome aluno2? ', () => {

rl.question('qual foi a sua nota? ', () => {
	console.log("parabens")
 
	let nota = (nota1=nota2);

 console.log("nota"+nota);

if(nota  ){
	console.log(nome2+" nota mais alta");

}

	rl.close();

});

 });

 });	

});

 });
 