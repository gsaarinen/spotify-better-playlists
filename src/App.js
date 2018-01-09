import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
};

let fakeServerData = {
  user: {
    name: 'Garret',
    playlists: [
      {
        name: 'My Favorites',
        songs: [
          {name: 'Beat It', duration: 1345},
          {name: 'Pachuca Sunrise', duration: 5634},
          {name: 'CC (You set the fire in me)', duration: 3452}
        ]
      },
      {
        name: 'Discovered Weekly',
        songs: [
          {name: 'Before Dawn', duration: 3452},
          {name: 'Apparent Lushness', duration: 2889},
          {name: 'By the wall', duration: 2847}
        ]
      },
      {
        name: 'Synthwave',
        songs: [
          {name: 'City of Dreams', duration: 2599},
          {name: 'Night Fantasy', duration: 4018},
          {name: 'All I Can Give', duration: 2018}
        ]
      },
      {
        name: 'Moderat-test',
        songs: [
          {name: 'Planet', duration: 2108},
          {name: 'History Lesson', duration: 1083},
          {name: 'Running', duration: 3018}
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render () {
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render () {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
    this.setState({serverData: fakeServerData});
  }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
           <h1 style={{...defaultStyle, 'font-size': '54px'}}>
             {this.state.serverData.user.name}s Playlists
           </h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> : <h1 style={defaultStyle}>Loading...</h1>
        }

      </div>
    );
  }
}

export default App;
