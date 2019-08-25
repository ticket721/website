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
                backgroundColor: this.state.background ? '#131313' : 'transparent'}}
        >
            <img alt='' src={logo} onLoad={this.activate_background} style={{position: 'absolute', width: '104%', zIndex: 1, left: '-2%', top: '-2%'}}/>
        </div>
    }
}
