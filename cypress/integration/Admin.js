/// <reference types="cypress" />

describe("For Admin", () => {
  let randomText = (Math.random() + 1).toString(36).substring(9);
  let n = Math.floor(Math.random() * 10);

  beforeEach(() => {
    cy.visit("http://api-uat-k8s-01.teda.th/admin/");
  });

  it("Admin Create user", () => {
    cy.xpath("//input[@name='username']").type("admin");
    cy.xpath("//input[@name='password']").type("P@ssw0rd@Etda");
    cy.xpath("//button[@name='login']").click();

    cy.xpath(
      "/html//nav[@class='ts-sidebar']/ul[@class='ts-sidebar-menu']//a[@href='userlist.php']"
    ).click();

    cy.xpath("//button[contains(text(),'Create New User')]").click();

    cy.get(":nth-child(1) > :nth-child(2) > .form-control").type(
      "Korakod_AutoCreate_" + randomText
    );

    cy.get(
      ".form-horizontal > :nth-child(1) > .form-group > .col-sm-5 > .form-control"
    )
      .click()
      .type("กรมเจ้าท่า");

    cy.get('[name="submit"]').click();
  });
});
