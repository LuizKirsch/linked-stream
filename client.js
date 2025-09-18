// client.js
import http from "http";
import { LinkedList } from "./linked-list/linked-list.js";

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log("Conectado ao servidor.");
  /* 4) Crie uma lista encadeada vazia aqui */
  const linkedList = new LinkedList();

  res.on("data", (chunk) => {
    /* 5) Utilize o método add para guardar cada chunk na lista encadeada */
    linkedList.add(chunk);
    console.log(`Dado recebido: ${chunk}\n`);
  });

  /* 10) Utilize o método getAt para mostrar o que existe nos índices 3 e 20 */
  /* 11) Utilize o método getSize para mostrar o tamanho da lista encadeada */
  /* 12) Utilize o método search para mostrar o primeiro índice da cor "verde" */
  /* 13) Utilize o método search para mostrar o último índice da cor "verde" */
  /* 14) Utilize o método removeAt para remover o elemento de índice 2 */
  /* 15) Utilize o método pop para remove o último elemento mostre o que foi removido */
  /* 16) Utilize o método toArray para mostrar a lista encadeada como um vetor */

  res.on("end", () => {
    console.log(`indice 3: ${linkedList.getAt(3)}`);
    console.log(`indice 20: ${linkedList.getAt(20)}`);
    console.log('--------------------------');
    console.log(`tamanho da lista encadeada: ${linkedList.getSize()}`);
    console.log('--------------------------');
    console.log(`primeiro índice da cor "verde": ${linkedList.search("verde")}`);
    console.log('--------------------------');
    console.log(`ultimo índice da cor "verde": ${linkedList.searchLast("verde")}`);
    console.log('--------------------------');
    console.log(`elemento removido do índice 2: ${linkedList.removeAt(2)}`);
    console.log('--------------------------');
    console.log(`ultimo elemento removido: ${linkedList.pop()}`);
    console.log('--------------------------');
    console.log(`lista como vetor: ${linkedList.toArray()}`);
    console.log('');
    console.log("\nTransmissão finalizada.");
  });

  res.on("end", () => {
    console.log("\nTransmissão finalizada.");
  });
});

req.on("error", (e) => {
  console.error(`Problema com a requisição: ${e.message}`);
});

req.end();
