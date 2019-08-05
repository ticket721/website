import * as React from 'react';
import video from './test_video.m4v';
import logo from './logo.svg';

export default class DesktopLogo extends React.Component {
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

        return <div style={{position: 'relative', overflow: 'hidden', maxHeight: 360, maxWidth: 640, width: Math.floor(640 * ratio), height:Math.floor(360 * ratio),
            backgroundColor: this.state.background ? '#202020' : 'transparent'
        }}>
            <img alt='' onLoad={this.activate_background} src={logo} style={{position: 'absolute', width: '104%', zIndex: 1, left: '-2%', top: '-2%'}}/>
            {
                this.state.background ?
                    //<video style={{marginLeft: 10, marginTop: 10, zIndex: 0}} src={video} type="video/mp4" autoPlay={true} playsInline={true} width={620 * ratio} height={340 * ratio} loop={true} muted={true}/>
                    null
                    :
                    null
            }
        </div>
    }
}
