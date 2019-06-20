import * as React from 'react';
import logo from './logo.svg';

export default class LoadingLogo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            background: false
        }
    }

    activate_background = () => {
        this.setState({
            background: true
        })
    }

    render() {
        const ratio = (window.innerWidth / 2) / 640;

        return <div
            style={{
                position: 'relative',
                overflow: 'hidden',
                maxHeight: 360,
                maxWidth: 640,
                width: Math.floor(640 * ratio),
                height:Math.floor(360 * ratio),
                backgroundColor: this.state.background ? '#202020' : 'transparent'}}
        >
            <img alt='' src={logo} onLoad={this.activate_background} style={{position: 'absolute', width: '100%', zIndex: 1, left: 0, top: 0}}/>
        </div>
    }
}
