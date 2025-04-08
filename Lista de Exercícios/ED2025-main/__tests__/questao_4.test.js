import conversor from "../src/Questão_4";

test("Testando se o decimal 25 é transformado em binário", () =>{
    expect(conversor(25)).toBe("11001");
  });

test("Testando se o decimal 19 é transformado em binário", () => {
    expect(conversor(45)).toBe("101101");
});

test("Testando se o decimal 8 é transformado em binário", () => {
    expect(conversor(8)).toBe("1000");
});

test("Testando se o decimal 3 é transformado em binário", () => {
    expect(conversor(3)).toBe("11");
});