import * as React from 'react';
import video from './test_video.m4v';
import logo from './logo.svg';

export default class Logo extends React.Component {
    render() {
        const ratio = (window.innerWidth / 2) / 640;

        return <div style={{position: 'relative', overflow: 'hidden', maxHeight: 360, maxWidth: 640, width: Math.floor(640 * ratio), height:Math.floor(360 * ratio), backgroundColor: '#202020'}}>
            <img alt='' src={logo} style={{position: 'absolute', width: '100%', zIndex: 1, left: 0, top: 0}}/>
            <video style={{zIndex: 0}} src={video} type="video/mp4" autoPlay={true} playsInline={true} width={640} height={360} loop={true} muted={true}/>
        </div>
    }
}
