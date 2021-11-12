/// <reference types="cypress" />

describe("For User", () => {
  let randomText = (Math.random() + 1).toString(36).substring(9);
  let n = Math.floor(Math.random() * 10);
  let nAgain = Math.floor(10 + Math.random() * 90);

  function randomChoice(totalChoice) {
    return Math.floor(Math.random() * totalChoice) + 1;
  }

  const userName = "Korakod_AutoCreate_0zx";
  const activationCode = "cTRRfMThMz";
  const password = "Password@1";
  const email = "kod@somedomain.com";

  beforeEach(() => {
    cy.visit("http://api-uat-k8s-01.teda.th");
  });

  it("Activate user account", () => {
    cy.get(":nth-child(3) > a").click();
    cy.get("#username").type(userName);
    cy.get("#password").type(password);
    cy.get("#confirmpassword").type(password);
    cy.get("#activation_code").type(activationCode);
    cy.get("#email").type(email);
    cy.get(".btn").click();
  });

  it("User able to login", () => {
    cy.xpath("//input[@name='username']").type(userName);
    cy.xpath("//input[@name='password']").type(password);
    cy.xpath("//button[@name='login']").click();
    cy.get(":nth-child(4) > .btn-submit-policy").click();

    cy.get(".s-btn").click();
    cy.get(".doc-name").type("Doc_name_of_" + userName);

    cy.get(
      ":nth-child(4) > .input-row > :nth-child(" + randomChoice(2) + ") > input"
    ).check();

    cy.get(
      ":nth-child(5) > .input-row > :nth-child(" + randomChoice(5) + ") > input"
    ).check();
    cy.get(".page-01 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-02 > .input-group > .input-row > :nth-child(" +
        randomChoice(4) +
        ") > input"
    ).check();
    cy.get(".page-02 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-03 > .input-group > .input-row > :nth-child(" +
        randomChoice(6) +
        ") > input"
    ).check();
    cy.get(".page-03 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-04 > .input-group > .input-row > :nth-child(" +
        randomChoice(3) +
        ") > input"
    ).check();
    cy.get(".page-04 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-05 > .input-group > .input-row > :nth-child(" +
        randomChoice(3) +
        ") > input"
    ).check();
    cy.get(".page-05 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-06 > .input-group > .input-row > :nth-child(" +
        randomChoice(8) +
        ") > input"
    ).check();
    cy.get(".page-06 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-07 > .input-group > .input-row > :nth-child(" +
        randomChoice(3) +
        ") > input"
    ).check();
    cy.get(".page-07 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-08 > .input-group > .input-row > :nth-child(" +
        randomChoice(4) +
        ") > input"
    ).check();
    cy.get(".page-08 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-09 > .input-group > .input-row > :nth-child(" +
        randomChoice(2) +
        ") > input"
    ).check();
    cy.get(".page-09 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-10 > .input-group > .input-row > :nth-child(" +
        randomChoice(2) +
        ") > input"
    ).check();
    cy.get(".page-10 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-11 > .input-group > .input-row > :nth-child(" +
        randomChoice(10) +
        ") > input"
    ).check();
    cy.get(".page-11 > .btn-gruop > :nth-child(2) > .s-btn").click();
  });

  it("User able to do Quiz again", () => {
    cy.xpath("//input[@name='username']").type(userName);
    cy.xpath("//input[@name='password']").type(password);
    cy.xpath("//button[@name='login']").click();

    cy.get(":nth-child(3) > a").click();

    cy.get(".doc-name").type("Do_Quiz_Again_" + userName + nAgain);
    // cy.get(".doc-name").type("Do_Quiz_Again_" + userName);

    cy.get(
      ":nth-child(4) > .input-row > :nth-child(" + randomChoice(2) + ") > input"
    ).check();

    cy.get(
      ":nth-child(5) > .input-row > :nth-child(" + randomChoice(5) + ") > input"
    ).check();
    cy.get(".page-01 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-02 > .input-group > .input-row > :nth-child(" +
        randomChoice(4) +
        ") > input"
    ).check();
    cy.get(".page-02 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-03 > .input-group > .input-row > :nth-child(" +
        randomChoice(6) +
        ") > input"
    ).check();
    cy.get(".page-03 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-04 > .input-group > .input-row > :nth-child(" +
        randomChoice(3) +
        ") > input"
    ).check();
    cy.get(".page-04 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-05 > .input-group > .input-row > :nth-child(" +
        randomChoice(3) +
        ") > input"
    ).check();
    cy.get(".page-05 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-06 > .input-group > .input-row > :nth-child(" +
        randomChoice(8) +
        ") > input"
    ).check();
    cy.get(".page-06 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-07 > .input-group > .input-row > :nth-child(" +
        randomChoice(3) +
        ") > input"
    ).check();
    cy.get(".page-07 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-08 > .input-group > .input-row > :nth-child(" +
        randomChoice(4) +
        ") > input"
    ).check();
    cy.get(".page-08 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-09 > .input-group > .input-row > :nth-child(" +
        randomChoice(2) +
        ") > input"
    ).check();
    cy.get(".page-09 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-10 > .input-group > .input-row > :nth-child(" +
        randomChoice(2) +
        ") > input"
    ).check();
    cy.get(".page-10 > .btn-gruop > :nth-child(2) > .s-btn").click();
    cy.get(
      ".page-11 > .input-group > .input-row > :nth-child(" +
        randomChoice(10) +
        ") > input"
    ).check();
    cy.get(".page-11 > .btn-gruop > :nth-child(2) > .s-btn").click();
  });
});
