import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("the method should return Equilateral if all sides are equal", () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  const values = { values: { sideOne: 20, sideTwo: 20, sideThree: 20 } };
  wrapper.setState(values);
  instance.findsOutTriangleType();
  expect(wrapper.state("type")).toBe("Equilateral");
});

it("the method should return Isosceles if two sides are equal", () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  const values = { values: { sideOne: 20, sideTwo: 20, sideThree: 30 } };
  wrapper.setState(values);
  instance.findsOutTriangleType();
  expect(wrapper.state("type")).toBe("Isosceles");
});

it("the method should return Scalene if two sides are equal", () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  const values = { values: { sideOne: 10, sideTwo: 20, sideThree: 30 } };
  wrapper.setState(values);
  instance.findsOutTriangleType();
  expect(wrapper.state("type")).toBe("Scalene");
});

it("render the App snapshot", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
