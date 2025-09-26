# ✔️ Validador de CPF com JavaScript

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Aplicação web que valida números de CPF (Cadastro de Pessoas Físicas) do Brasil, utilizando o algoritmo matemático oficial.

## 📄 Sobre o Projeto

Este projeto é uma ferramenta de front-end desenvolvida para verificar a autenticidade de um número de CPF. O usuário insere o CPF em um campo de texto e a aplicação, através de uma lógica implementada em JavaScript, calcula os dígitos verificadores e informa se o número é válido ou inválido.

O principal objetivo foi criar uma aplicação funcional para praticar a implementação de algoritmos e a manipulação do DOM. O projeto foi recentemente **refatorado para utilizar a sintaxe de `class` do ES6**, resultando em um código mais moderno, modular e de fácil manutenção.

## 🛠️ Arquitetura e Conceitos Aplicados

O projeto foi construído com uma estrutura simples de HTML, CSS e JavaScript, focando na lógica de validação e na interatividade com o usuário. A versão atual foi refatorada para utilizar práticas mais modernas de JavaScript.

Os principais conceitos técnicos empregados são:

* **JavaScript Moderno (ES6) e Orientação a Objetos:** A lógica de validação foi encapsulada em uma **`class`** chamada `ValidarCpf`. Essa abordagem, introduzida no ES6, organiza o código de forma mais clara e intuitiva. A lógica foi segmentada em vários métodos pequenos e especializados (como `limpaCpf`, `retornaDoisUltimosNumber` e `checagemFinal`), melhorando a legibilidade e a manutenção do código.

* **Algoritmo de Validação de CPF:** O núcleo da aplicação continua sendo a implementação fiel do algoritmo de cálculo dos dois dígitos verificadores do CPF, garantindo a precisão da ferramenta.

* **Manipulação do DOM e Eventos:** A aplicação utiliza `addEventListener` para capturar eventos de clique e de teclado (`Enter`), atualizando o DOM dinamicamente para exibir o resultado da validação ao usuário.

* **Feedback Visual para o Usuário:** O CSS é utilizado para fornecer uma resposta visual clara e imediata. A caixa de resultado muda de cor (verde para válido, vermelho/marrom para inválido), melhorando a experiência do usuário.

## 🎯 Funcionalidades Implementadas

* **Validação Precisa:** Implementa o cálculo matemático completo para a validação dos dígitos verificadores.
* **Interface Intuitiva:** Um campo de entrada claro e botões de "Confirmar" e "Resetar" para fácil utilização.
* **Flexibilidade de Formato:** O sistema limpa a string de entrada, permitindo que o usuário insira o CPF com ou sem pontos e traços.
* **Resposta Imediata:** A validação ocorre instantaneamente, e o resultado é exibido na tela com cores indicativas.

## 👨‍💻 Autor

| [<img src="https://github.com/GUSTAV0-CRUZ.png" width="100px;"/><br /><sub><b>Gustavo Cruz</b></sub>](https://github.com/GUSTAV0-CRUZ) |
| :---: |

Projeto desenvolvido por Gustavo Cruz (GUSTAV0-CRUZ).
