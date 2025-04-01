import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import List from "./";

describe("CustomList", () => {
  const mockProps = {
    avatar: "/mock-avatar.png",
    title: "Consulta com Dr. Neko",
    description: "Dia 25 de Março às 14h",
    subDescription: "Consulta online via Zoom 🐾",
  };

  it("deve renderizar o avatar, título e descrições", () => {
    render(<List {...mockProps} />);

    // Avatar
    const avatar = screen.getByRole("img", { name: /avatar/i });
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", mockProps.avatar);

    // Título
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Descrição
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();

    // Subdescrição
    expect(screen.getByText(mockProps.subDescription)).toBeInTheDocument();
  });

  it("deve renderizar os botões de ação com ícones", () => {
    render(<List {...mockProps} />);

    expect(screen.getByLabelText(/update/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/delete/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/notification/i)).toBeInTheDocument();
  });
});
