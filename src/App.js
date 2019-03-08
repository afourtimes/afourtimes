import React, {Component} from 'react';
import SpotifyPlayer from 'react-spotify-player';
import './App.css';

class App extends Component {
    state = {
        windowWidth: window.innerWidth,
        time: 0,
    }

    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth,
        });
    }

    startTimer = () => {
        setInterval(() => this.setState({
            time: this.state.time + 1
        }), 1000);
    }

    componentDidMount() {
        this.startTimer();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        const {windowWidth} = this.state;
        const size = {
            width: windowWidth < 800 ? '100%' : 300,
            height: 425,
        };

        return (
            <div className="App">
                <header className="afourtimes-logo">
                    <div className="logo-wrapper">
                        <img
                            src={require('./assets/img/AAAA.jpg')}
                            width="100"
                            height="100"
                            alt="AAAA-logo"
                            style={{display: 'block', margin: '0 auto'}}
                            id="offset"
                        />
                    </div>
                </header>
                <div className="spotify-player">
                    <SpotifyPlayer
                        uri="spotify:user:adityaastono:playlist:0lCME6JLnPqInwv8SdW2jQ"
                        size={size}
                    />
                </div>

                <div className="aside aside-1 align-right">
                    <p>
                        <span className="timer-number">{this.state.time}</span>s
                    </p>
                </div>

                <div className="aside aside-2 align-left">
                    <p style={ { marginBottom: '30px' } }>
                        An eye for an eye.<br/>
                        A heart for a heart.<br/>
                        Perhaps this is goodbye.<br/>
                        Shall us not apart.
                    </p>
                    <p>
                        - <i>A. Astono</i>
                    </p>
                </div>

                <div className="footer">
                    <a href="https://www.instagram.com/afourtimes/">
                        <img
                            className="ig-logo"
                            src={require('./assets/img/ig-logo.png')}
                            width="24"
                            height="24"
                            alt="ig-logo"
                        />
                    </a>
                </div>

            </div>
        );
    }
}

export default App;
