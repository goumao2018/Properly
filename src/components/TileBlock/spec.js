import React from 'react';
import { mount } from 'enzyme';
import TileBlock from './';

describe("<TileBlock />", () => {
  it("sets image url", () => {
    const component = mount(
      <TileBlock
        imageUrl="http://via.placeholder.com/300"
      />
    );
    expect(component.props().imageUrl).toEqual("http://via.placeholder.com/300");
    expect(component).toMatchSnapshot();
  })

  it("sets title", () => {
    const component = mount(
      <TileBlock
        title="TestBlock"
      />
    );
    expect(component.props().title).toEqual("TestBlock");
    expect(component).toMatchSnapshot();
  })
})