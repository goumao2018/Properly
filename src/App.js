import React, { Component } from "react";
import "./App.scss";
import TileBlock from "./components/TileBlock";
import SearchTile from "./components/SearchTile";
import AddTile from "./components/AddTile";
import BodyLayout from "./layout/BodyLayout";
import TileLayout from "./layout/TileLayout";
import { apartmentBlockData } from "./sampleData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apartmentData: apartmentBlockData, results: [] };
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
        <BodyLayout>
          <TileLayout columnCount={2}>
            <AddTile addTile={this.addTile} />
            <SearchTile
              apartmentData={this.state.apartmentData}
              updateResult={this.updateApartmentData}
            />
            <header className="App-header" />
            {this.renderApartmentData(dataToRender)}
          </TileLayout>
        </BodyLayout>
      </div>
    );
  }
}

export default App;
