/// <reference types="Cypress"/>

import testElements from '../elements/testElements'
const testelements = new testElements
const url = Cypress.config("baseUrl")


class TestPage {

    //acessar Site
    acessarSite(){
    cy.visit(url)
    cy.wait(2000)
    cy.screenshot()    
    }

    //Preencher dados doo registro
    preencherFirstName(){
        cy.get(testelements.firstName()).type('Laércio')
    }
    
    preencherLastName(){
        cy.get(testelements.lastName()).first().type('Gonçalves de Andrade')  
    }
    
    preencherAddress(){
        cy.get(testelements.address()).type('Rua Simonildes Guil')
    }

    preencherEmail(){
        cy.get(testelements.email()).type('andradelaercioo@hotmail.com')
        cy.wait(1000)
    } 

    preencherTelefone(){
        cy.get(testelements.telefone()).first().type('9953791927')
    }

    selecionarSexo(){
        cy.get(testelements.sexo()).first().click()
    }

    selecionarHobiies(){
        cy.get(testelements.hobbies()).click()
    }
    
    clicarlinguagem(){
        cy.get(testelements.clicarlanguage()).click()
        
        
    } 
    selecionarlinguagem(){
        cy.get(testelements.selecionarlanguage()).contains('Arabic').click()

    }

    selecionarskills(){
        cy.wait(1000)
        cy.get(testelements.skills()).select('AutoCAD', {force: true})
    }
   
    escolherlocalização(){
        cy.get(testelements.localização()).select('Brazil')
    }
       
    selecionarlocalização(){
        cy.get(testelements.selecionarlocalização()).select('United States of America', { force: true })
        
    }

    selecionarano(){
        cy.get(testelements.selecionarano()).select('1997')
        
    }

     selecionarmes(){
         cy.get(testelements.selecionarmes()).select('June')
     }

     selecionardia(){
         cy.get(testelements.selecionardia()).select('21')
     }
     
     preencherpassword(){
         cy.get(testelements.password()).type('Teste123')
     }
      
     confirmarpassword(){
         cy.get(testelements.confirmpassword()).type('Teste123')
         cy.screenshot()
     }

     // Salvar Dados
     salvarDados(){
         cy.get(testelements.salvar()).click()
         cy.screenshot()
         
     }
    // Validar tela
    validartela(){
        cy.wait(1000)
        cy.get(testelements.validartela()).contains('Not Found')
        cy.screenshot()
    }
   
}
export default TestPage;
