import verificador from "../src/Questão_5";

test("Testando se a sequencia de parenteses e colchetes esta certa", () =>{
    expect(verificador("[ ( ) [ ( ) ] ] ( )")).toBe(true);
  });

  test("Testando se a sequencia de parenteses e colchetes esta errada", () =>{
    expect(verificador("[ ( ) [ ( ) ] ] )")).toBe(false);
  });