Feature: Realizar Cadastro na página de Automação Demo

  Scenario: Preencher todos os campos
      Given que acesso o formulário
      When  preencho os dados
      And   clico em submit
      Then  valido a tela do Site


  Scenario: Preencher dados incorretos
      Given que acesso o formulário
      When  preencho os dados incorretamente
      Then  clico em submit