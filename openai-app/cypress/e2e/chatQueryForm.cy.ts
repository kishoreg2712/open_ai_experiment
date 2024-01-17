// cypress/e2e/chatqueryform.spec.ts
/// <reference types="cypress" />

describe('Chat Query Component',()=>{
  it('Chat Query Form Submission',()=>{
      cy.visit('http://localhost:5173/home');
      cy.get("#features").click();
      cy.get('#inputQuery').type('Hello GPT, what is your current Version');
      cy.get('#Submit_Button').click();
      cy.get('#Query').then(($element)=>{
        const text = $element.text().trim();
        cy.log(text);
        expect(text).not.to.be.empty;
      });
      cy.get('#Result').then(($element)=>{
        const text = $element.text().trim();
        cy.log(text);
        expect(text).not.to.be.empty;
      });
  })
})