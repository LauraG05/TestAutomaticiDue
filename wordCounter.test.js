const contaCaratteri = require("./wordCounter");

test("Conta dei caratteri della parola CIAO", () => {
  expect(contaCaratteri("ciao")).toBe(4);
});

test("Conta dei caratteri della parola CIAO", () => {
  expect(contaCaratteri("ciao")).toBe(7);
});

test("Conta dei caratteri della parola ADA", () => {
  expect(contaCaratteri("ada")).toBe(4);
});

test("Conta dei caratteri della parola ADA", () => {
  expect(contaCaratteri("ada")).toBe(3);
});
