# Minimercado PUCRS - Projeto de Fundamentos de Sistemas Web

Este projeto foi desenvolvido como parte da avaliação da disciplina de Fundamentos de Sistemas Web do curso de Análise e Desenvolvimento de Sistemas da PUCRS Online. O objetivo é a criação de um site estático e responsivo para um minimercado fictício, aplicando conceitos de HTML, CSS e Bootstrap.

**Aluno:** Tiago Francisco Strey

---

## Funcionalidades Implementadas

O site é composto por diversas páginas que simulam a experiência de um e-commerce simples.

### 1. Página Inicial (`index.html`)
- **Carrossel de Destaques:** Um banner rotativo que exibe os principais produtos ou categorias da loja.
- **Navegação Principal:** Cards que direcionam o usuário para as seções de Produtos e Serviços.

### 2. Página de Produtos (`produtos.html`)
- **Catálogo de Produtos:** Exibe 6 produtos de exemplo, divididos em 3 categorias:
  - Frutas e Verduras
  - Alimentícios Não Perecíveis
  - Higiene e Limpeza
- **Fluxo de Compra:** Cada produto possui um botão "Comprar" que inicia o processo de finalização do pedido.

### 3. Página de Compra (`compra.html`)
- **Checkout Simplificado:** Funciona como uma tela de confirmação após o cliente escolher um produto.
- **Chamada para Cadastro:** Alerta o usuário sobre a necessidade de se cadastrar caso seja a primeira compra.
- **Direcionamento para Agendamento:** O botão principal leva o usuário para a etapa final, que é o agendamento do serviço.

### 4. Página de Serviços (`servicos.html`)
- **Descrição dos Serviços:** Apresenta os dois serviços oferecidos pelo minimercado: Retirada no local e Tele-entrega.
- **Agendamento Direto:** Contém um formulário que permite a qualquer visitante agendar um dos serviços, informando a data e o horário desejado.

### 5. Página de Cadastro (`cadastro.html`)
- **Formulário de Cliente:** Uma página dedicada para o cadastro de novos clientes, contendo campos para dados pessoais como nome completo, endereço, CPF, e-mail, telefone e sexo.
- **Validação de Formulário:** Utiliza atributos do HTML5 para garantir que os campos sejam preenchidos (`required`).

---

## Tecnologias Utilizadas
* **HTML5:** Para a estruturação semântica do conteúdo.
* **CSS3:** Para estilização personalizada, incluindo cores, fontes e layout.
* **Bootstrap 5:** Framework utilizado para a criação de um layout responsivo e para componentes como o carrossel, cards e formulários.

---

## Como Executar o Projeto Localmente
1.  Clone ou baixe o repositório para o seu computador.
2.  Certifique-se de que todos os arquivos (`.html`, `style.css`) e a pasta `img` estejam no mesmo diretório.
3.  Abra o arquivo `index.html` em qualquer navegador de internet moderno (Google Chrome, Firefox, etc.).
