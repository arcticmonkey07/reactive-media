import renderer from 'react-test-renderer';
import Navbar from "./Navbar";

it("render correctly Navbar component", () => {
  const NavbarComponent = renderer.create(<Navbar />).toJSON();
  expect(NavbarComponent).toMatchSnapshot();
});