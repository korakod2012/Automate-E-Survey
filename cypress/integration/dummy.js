/// <reference types="cypress" />

describe("For Admin", () => {
  let randomText = (Math.random() + 1).toString(36).substring(9);
  let n = Math.floor(Math.random() * 10);

  beforeEach(() => {
    cy.visit("http://api-uat-k8s-01.teda.th/admin/");
  });

  it("Not able login if wrong user", () => {
    cy.xpath("//input[@name='username']").type("admin99");
    cy.xpath("//input[@name='password']").type("1234");
    cy.xpath("//button[@name='login']").click();

    // cy.window().then(function (promptelement) {
    //   cy.stub(promptelement, "prompt");
    //   cy.xpath("//*[").click();
    // });
  });
});
