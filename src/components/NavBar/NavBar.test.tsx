// NavBar.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from ".";

describe("NavBar", () => {
  it("deve renderizar o logo e o título NekoCare", () => {
    render(<NavBar />);

    // Verifica os textos "Neko" e "Care"
    expect(screen.getByText("Neko")).toBeInTheDocument();
    expect(screen.getByText("Care")).toBeInTheDocument();

    // Verifica se a imagem foi renderizada (src e alt são opcionais aqui)
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
  });

  it("deve renderizar os links de navegação", () => {
    render(<NavBar />);

    expect(screen.getByText("Consultas")).toBeInTheDocument();
    expect(screen.getByText("Exames")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
    expect(screen.getByText(/Curiosidades/)).toBeInTheDocument(); // com emoji
  });

  it("deve abrir o menu de conta ao clicar no avatar", () => {
    render(<NavBar />);

    const avatarButton = screen.getByRole("button", {
      name: /account settings/i,
    });
    fireEvent.click(avatarButton);

    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/My account/i)).toBeInTheDocument();
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });
});
