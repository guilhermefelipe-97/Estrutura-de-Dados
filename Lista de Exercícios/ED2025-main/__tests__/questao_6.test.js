import rpn from "../src/Questão_6";

test("Testando se a expressão sairá corretamente como RPN", () =>{
    expect(rpn("((a+t)*((b+(a+c))^(c+d)))")).toBe("at+bac++cd+^*");
  });

  test("Testando se a expressão sairá corretamente como RPN", () =>{
    expect(rpn("(a+(b*c))")).toBe("abc*+");
  });

  test("Testando se a expressão sairá corretamente como RPN", () =>{
    expect(rpn("(a+b)*(c-d)")).toBe("ab+cd-*");
  });

  test("Testando se a expressão sairá corretamente como RPN", () =>{
    expect(rpn("(a+b*c-d)")).toBe("abc*+d-");
  });