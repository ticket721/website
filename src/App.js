import { Button, Icon } from 'antd';
import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';
import './App.css';
import LoadingLogo from './components/logo/loading';
import Description from './sections/description';
import Footer from './sections/footer';
const DynamicLogo = React.lazy(() => import('./components/logo'));


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Button className='play_button' ghost={true} style={{position: 'absolute', right: 20, top: 20}} type={'primary'} size={'large'}>
                    {this.props.t('run_app')}
                    <Icon type="caret-right" />
                </Button>
                <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Suspense fallback={<LoadingLogo/>}>
                        <DynamicLogo/>
                    </Suspense>
                </div>
                <Description/>
                <Footer/>
            </div>
        );
    }
}

export default withTranslation('common')(App);
