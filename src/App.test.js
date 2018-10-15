import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import App from "./components/LoginApp/LoginApp";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App components", () => {
    test("renders", () => {
        const wrapper = shallow(<App />);

        expect(wrapper.exists()).toBe(true);
    });

    test("user text is echoed", () => {
        const wrapper = shallow(<App />);

         wrapper.find("#username").simulate("change", {
            target: { value: "hello" }
        });
        //console.log(container.state());
        expect(wrapper.state().username).toEqual("hello");
    });

/*    test("when the form is submitted the event is called", () => {
        const wrapper = shallow(<App />);
        let prevented = false;
        wrapper.find("form").simulate("submit", {
            preventDefault: () => {
                prevented = true;
            }
        });
        expect(prevented).toBe(true);
    });
    */
});