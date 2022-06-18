import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from "./App";

describe('Testing todo App ', () => {

  let title,text, addButton;

  beforeEach(()=>{
    render(<App />);
    [title, text] = screen.queryAllByRole("textbox");
    userEvent.type(title, "First Todo");
    addButton = screen.getByText("Add");
    userEvent.click(addButton);
    userEvent.type(title, "Sec Todo");
    userEvent.click(addButton);
    userEvent.type(title, "Third Todo");
    userEvent.click(addButton);
    userEvent.type(title, "Fourth Todo");
    userEvent.click(addButton);
  })

  it("Testing 'Add todo' functionality", ()=>{
    let date = new Date().toLocaleDateString();
    let deleteButtons = screen.queryAllByText("Delete");
    expect(deleteButtons[0]).toBeInTheDocument();
    expect(screen.getByText("First Todo")).toBeInTheDocument();
    expect(screen.getByText("Sec Todo")).toBeInTheDocument();
    expect(screen.getByText("Third Todo")).toBeInTheDocument();
    expect(screen.getByText("Fourth Todo")).toBeInTheDocument();
    expect(screen.getAllByText(date)[0]).toBeInTheDocument();
  })

  it("Testing 'remove todo' functionality", ()=>{
    let deleteButtons = screen.queryAllByText("Delete");
    expect(screen.getByText("First Todo")).toBeInTheDocument();
    userEvent.click(deleteButtons[0]);
    expect(screen.queryByText("First Todo")).toBeNull();
  })

  it("Testing filters 'Active filter' ", ()=>{
    let doneButtons = screen.getAllByRole("done");
    userEvent.click(doneButtons[0]);
    expect(screen.getByText("First Todo")).toBeInTheDocument();
    userEvent.click(screen.getByText("Active"));
    expect(screen.queryByText("First Todo")).toBeNull();
    expect(screen.getByText("Sec Todo")).toBeInTheDocument();
    userEvent.click(doneButtons[1]);
    expect(screen.queryByText("Sec Todo")).toBeNull();
  })

  it("Testing filters 'Completed filter' ", ()=>{
    let buttons = screen.getAllByRole("button");
    let doneButtons = screen.getAllByRole("done");
    userEvent.click(screen.getByText("Completed"));
    expect(screen.queryByText("Third Todo")).toBeNull();
    expect(screen.queryByText("Fourth Todo")).toBeNull();
    expect(screen.getByText("First Todo")).toBeInTheDocument();
    expect(screen.getByText("Sec Todo")).toBeInTheDocument();
  })

  it("Testing 'Clear completed' functionality ", ()=>{
    let buttons = screen.getAllByRole("button");
    userEvent.click(screen.getByText("Clear completed"));
    expect(screen.queryByText("First Todo")).toBeNull();
    expect(screen.queryByText("Sec Todo")).toBeNull();
    expect(screen.getByText("Third Todo")).toBeInTheDocument();
    expect(screen.getByText("Fourth Todo")).toBeInTheDocument();
  })


});
