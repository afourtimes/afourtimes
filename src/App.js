import React, {Component} from 'react';
import SpotifyPlayer from 'react-spotify-player';
import './App.css';

class App extends Component {
    state = {
        windowWidth: window.innerWidth,
    }

    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth,
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        const {windowWidth} = this.state;
        const size = {
            width: windowWidth < 767 ? '100%' : 300,
            height: 425,
        };
        const view = 'list';
        const theme = 'white';

        return (
            <div className="App">
                <img
                    src={require('./assets/img/AAAA.jpg')}
                    width="100"
                    height="100"
                    alt="AAAA-logo"
                    style={{display: 'block', margin: '0 auto'}}
                    id="offset"
                />
                <SpotifyPlayer
                    uri="spotify:user:adityaastono:playlist:0lCME6JLnPqInwv8SdW2jQ"
                    size={size}
                    view={view}
                    theme={theme}
                />
                <a href="https://www.instagram.com/afourtimes/">
                    <img
                        src={require('./assets/img/ig-logo.png')}
                        width="24"
                        height="24"
                        alt="ig-logo"
                        style={{display: 'block', margin: '20px auto'}}
                    />
                </a>

            </div>
        );
    }
}

export default App;
