import removeDuplicados from "../src/Questão_7";

test("Testando com dois elementos duplicados", () => {
  expect(removeDuplicados("1,1")).toBe("1");
});

test("Testando com duplicados intercalados", () => {
  expect(removeDuplicados("5,3,5,2")).toBe("5,3,2");
});

test("Testando se a pilha irá apagar os números duplicados", () => {
  expect(removeDuplicados("3,7,3,2,7,1,4,2")).toBe("3,7,2,1,4");
});

test("Testando com todos elementos únicos", () => {
  expect(removeDuplicados("9,8,7,6,5")).toBe("9,8,7,6,5");
});

test("Testando se a pilha irá apagar os números duplicados", () => {
  expect(removeDuplicados("3,7,1,4,2,3,4")).toBe("3,7,1,4,2");
});