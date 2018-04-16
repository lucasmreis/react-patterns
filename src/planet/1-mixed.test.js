import createTestContext from "react-cosmos-test/enzyme";
import fixture from "./1-mixed.fixture";
import wait from "wait-for-expect";

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test("works", async () => {
  const wrapper = getWrapper();

  expect(wrapper.text()).toContain("Loading...");

  await wait(() => wrapper.find("[data-test='planet']"));

  expect(wrapper.text()).toContain("Dagobah");
});
