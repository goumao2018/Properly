import React, { Component } from "react";
import "./App.scss";
import TileBlock from "./components/TileBlock";
import SearchTile from "./components/SearchTile/index";
import AddTile from "./components/AddTile/index";
import { apartmentBlockData } from "./sampleData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apartmentData: [apartmentBlockData], results: [] };
  }
  renderApartmentData = apartmentData =>
    apartmentData.map((item, index) => (
      <TileBlock
        imageUrl={item.imageUrl}
        title={item.title}
        notificationCount={item.notificationCount}
      />
    ));

  updateApartmentData = updatedItems => {
    this.setState({
      apartmentData: updatedItems
    });
  };
  addTile = (
    title = "Sample Title",
    imageUrl = "http://placekitten.com/100x200",
    notificationCount = 0
  ) => {
    const sampleTileStructure = {
      title,
      imageUrl,
      notificationCount
    };
    const updatedApartmentData = [
      ...this.state.apartmentData,
      sampleTileStructure
    ];

    this.setState({ apartmentData: updatedApartmentData });
  };

  render() {
    const dataToRender = this.state.apartmentData || apartmentBlockData;
    return (
      <div className="App hero">
        <SearchTile
          apartmentData={this.state.apartmentData}
          updateResult={this.updateApartmentData}
        />
        <AddTile addTile={this.addTile} />
        <header className="App-header">
          {this.renderApartmentData(dataToRender)}
        </header>
      </div>
    );
  }
}

export default App;
