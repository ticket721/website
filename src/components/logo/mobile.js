import * as React from 'react';
import logo from './logo.svg';
import animation from './mobile_video.gif';

export default class MobileLogo extends React.Component {
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
                    //<img alt='' src={animation} style={{zIndex: 0}} width={620 * ratio} height={340 * ratio} />
                    null
                    :
                    null
            }
        </div>
    }
}
