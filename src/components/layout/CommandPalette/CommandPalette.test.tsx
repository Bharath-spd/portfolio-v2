import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../../context/ThemeContext";
import { CommandPalette } from "./CommandPalette";

function setup(extra?: React.ReactNode) {
  render(
    <ThemeProvider>
      {extra}
      <CommandPalette />
    </ThemeProvider>
  );
}

const openPalette = () => fireEvent.keyDown(window, { key: "k", ctrlKey: true });

describe("CommandPalette accessibility", () => {
  it("is closed by default and opens with Ctrl+K as a labelled modal dialog", async () => {
    setup();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    openPalette();
    const dialog = await screen.findByRole("dialog", { name: /command palette/i });
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });

  it("focuses a combobox wired to a listbox of options", async () => {
    setup();
    openPalette();
    const input = await screen.findByRole("combobox");
    expect(input).toHaveFocus();
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    const options = screen.getAllByRole("option");
    expect(options.length).toBeGreaterThan(0);
    expect(input).toHaveAttribute("aria-activedescendant", options[0].id);
  });

  it("moves the active option with arrow keys and wraps around", async () => {
    const user = userEvent.setup();
    setup();
    openPalette();
    const input = await screen.findByRole("combobox");
    const options = screen.getAllByRole("option");
    await user.keyboard("{ArrowDown}");
    expect(input).toHaveAttribute("aria-activedescendant", options[1].id);
    await user.keyboard("{ArrowUp}{ArrowUp}");
    expect(input).toHaveAttribute("aria-activedescendant", options[options.length - 1].id);
  });

  it("filters results and announces when nothing matches", async () => {
    const user = userEvent.setup();
    setup();
    openPalette();
    await screen.findByRole("combobox");
    await user.keyboard("zzzz");
    expect(screen.queryAllByRole("option")).toHaveLength(0);
    expect(screen.getAllByText("No matches").length).toBeGreaterThan(0);
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const user = userEvent.setup();
    setup(<button>trigger</button>);
    const trigger = screen.getByText("trigger");
    trigger.focus();
    openPalette();
    await screen.findByRole("dialog");
    await user.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
  });
});
