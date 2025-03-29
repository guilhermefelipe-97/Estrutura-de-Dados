import Hello from "../src/Hello";

let h;

beforeEach(() => {
  h = new Hello();

});

test("Hello World", () => {
  expect(h.toString()).toBe("Hello World");
});

test("Hello TADS", () => {
  let hello = new Hello("TADS");
  expect(hello.toString()).toBe("Hello TADS");
});
