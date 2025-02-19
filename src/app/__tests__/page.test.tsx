import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../page";

describe("Page", () => {
	it("renders", () => {
		render(<Home />);
	});

	it("renders and click on the github button", async () => {
		const user = userEvent.setup();
		render(<Home />);

		await screen.findByTitle("button github");

		await user.click(screen.getByTitle("button github"));
		await user.click(screen.getByTitle("button discord"));
	});
});
