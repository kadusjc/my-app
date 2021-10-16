import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// @ponicode
describe("updateAuthorsList", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", async () => {
        await inst.updateAuthorsList()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", async () => {
        await inst.componentDidMount()
    })
})
