import React, { Component } from 'react';
import './App.scss';
import TileBlock from './components/TileBlock';
import { apartmentBlockData } from './sampleData';

class App extends Component {
  renderApartmentData = apartmentData => (
    apartmentData.map((item, index) => 
      <TileBlock imageUrl={item.imageUrl} title={item.title} notificationCount={item.notificationCount} />
    )
  )

  render() {
    const {
      apartmentData
    } = this.props;
    
    const dataToRender = apartmentData || apartmentBlockData;

    return (
      <div className="App">
        <header className="App-header">
          {this.renderApartmentData(dataToRender)}
        </header>
      </div>
    );
  }
}

export default App;
