import React from "react";
import {create, act} from "react-test-renderer";
import {Provider} from "react-redux";
import configMockStore from "redux-mock-store";

import OrderPage from "../OrderPage";
import Context from "../../../ContextComponent";

const mockSrore = configMockStore();

it("Test of <OrderPage/>", async ()=>{
    global.fetch = jest.fn(()=>Promise.resolve({json: jest.fn(()=>Promise.resolve())}));
    const store = mockSrore({
        clientOrderReduser: {
            currentOrder: {},
            orderFormIsLoad: false
        },
        clientTownsReduser: {
            townsArr: [{id: 1, name: "Town1"}, {id: 2, name: "Town2"}],
            townsInOrderFormIsLoad: false
        }
    })
    const mockContextValue = {
        openErrorWindowWithMsg: jest.fn(),
        openWarningTooltip: jest.fn(),
        warningTooltipMsg: "Warning"
    }
    const mockProps = {
        history: {
            push: jest.fn()
        }
    }
    let component;
    await act(async ()=>{
        component = await create(
        <Provider store = {store}>
            <Context.Provider value = {mockContextValue}>
                <OrderPage {...mockProps}/>
            </Context.Provider>
        </Provider>
        );
    });

    expect(component.toJSON()).toMatchSnapshot();

});