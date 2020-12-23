Feature: Realizar Cadastro na página de Automação Demo

  Scenario: Preencher todos os campos
      Given que acesso o formulário
      When  preencho os dados
      And   clico em submit
      Then  valido a tela do Site


  Scenario: Preencher dados cadastro com erro
      Given que acesso o formulário
      When  preencho os dados faltando um campo obrigatório
      Then  apresentara um erro porque um campo obrigatório não foi preechido