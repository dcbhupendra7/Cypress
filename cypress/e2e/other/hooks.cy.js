///<reference types ="cypress"/>

describe("Hooks", () => {
  before(() => {
    cy.log("runs once before all tests in the block");
    // runs once before all tests in the block
  });

  beforeEach(() => {
    // runs before each test in the block
    cy.log("runs before each test in the block");
  });

  afterEach(() => {
    // runs after each test in the block
    cy.log("runs after each test in the block");
  });

  after(() => {
    // runs once after all tests in the block
    cy.log("runs once after all tests in the block");
  });
  it("Example test1", () => {
    cy.log("First test ");
  });
  it("Second exapmle test", () => {
    cy.log("Second test log");
  });
});
