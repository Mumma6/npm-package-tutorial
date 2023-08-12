import { sayHello } from "../src/index"

describe("sayHello function", () => {
  it("should return a greeting with the provided name", () => {
    expect(sayHello("Martin")).toBe("Hello, Martin")
  })
})
