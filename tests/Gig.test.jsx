import { screen, render } from "@testing-library/react";

import Gig from "../src/components/Gig";

describe("Gig test", () => {
    it("Should render a h3 with the correct gig artist", () => {
        render(<Gig artist="Mon Rovia" />);
        expect(screen.getByText("Gig for Mon Rovia!"))
    });
});