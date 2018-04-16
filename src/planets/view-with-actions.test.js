import createTestContext from "react-cosmos-test/enzyme";
import fixture from "./view-with-actions.fixture";

const [loadingFixture, errorFixture, planetFixture] = fixture;

describe("Loading", () => {
  const { mount, getWrapper } = createTestContext({ fixture: loadingFixture });

  beforeEach(mount);

  test("renders loading", () => {
    expect(getWrapper().text()).toContain("Loading...");
  });
});

describe("Loading", () => {
  const { mount, getWrapper } = createTestContext({ fixture: planetFixture });

  beforeEach(mount);

  test("renders loading", () => {
    expect(getWrapper().text()).toContain("Earth");
  });
});
