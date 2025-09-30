# <p align="center"> Chico </p>

## Conceito

Repositório para entrega da tarefa da Fatec Ferraz de Vasconcelos, consistindo na criação de uma REST API para comunicação com um banco de dados MongoDB.

- Propostas de endpoints:
    - GET de cidades por estado
    - GET de cidade por nome

## Como rodar

Para rodar o projeto basta seguir os passos abaixo:
- Rodar o comando ```npm i``` para instalar as bibliotecas do projeto
- Definir as envs de ambiente (exemplo no arquivo ./env.example)
- Finalizar com o comando ```npm run dev```

## Entidades

### City
```ts
export interface ICity {
  name: string;
  state: string;
  country: string;
  birthday: Date;
  population: number;
}
```

## Testes

Para testar a aplicação será necessário utilizar de seus endpoints.
- ```/cities``` endpoint para pegar todas as cidades cadastradas em seu DB.
- ```/cities?name=example``` endpoint usado para realizar filtros de cidade por seu nome, vale mencionar que o exemplo com name pode ser trocado para qualquer chave da entidade City.

## Tratamento de Erro

O sistema conta com um tratamento de erro para o caso de não achar registros ou erros de conexão com o banco de dados.