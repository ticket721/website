import { Button, Icon, Typography } from 'antd';
import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';
import './App.css';
import './mobile.css';
import LoadingLogo from './components/logo/loading';
import Slogan from './sections/slogan';
import Description from './sections/description';
import Showcase from './sections/showcase';
import Footer from './sections/footer';
const DynamicLogo = React.lazy(() => import('./components/logo'));


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            userType: 'user'
        }
    }

    updateUserType(type) {
        if (this.state.userType !== type) {
            this.setState({ userType: type });
        }
    }

    render() {
        return (
            <div className="App">
                <Button
                className='play-button'
                type={'primary'}
                size={'large'}>
                    {this.props.t('run_app')}
                    <Icon type='caret-right' />
                </Button>
                <div className='logo-container'>
                    <Suspense fallback={<LoadingLogo/>}>
                        <DynamicLogo/>
                    </Suspense>
                </div>
                <Slogan />
                <div className='tabs'>
                    <div className={'tab' + (this.state.userType === 'user' ? ' selected' : '')}>
                        <Typography.Text
                        data-hover={this.props.t('tab_user_title')}
                        onClick={() => this.updateUserType('user')}>
                            {this.props.t('tab_user_title')}
                        </Typography.Text>
                    </div>
                    <div className={'tab' + (this.state.userType === 'organiser' ? ' selected' : '')}>
                        <Typography.Text
                        data-hover={this.props.t('tab_organiser_title')}
                        onClick={() => this.updateUserType('organiser')}>
                            {this.props.t('tab_organiser_title')}
                        </Typography.Text>
                    </div>
                    <Icon
                    className={'triangle' + (this.state.userType === 'organiser' ? ' on-organiser' : '')}
                    type='caret-up' />
                </div>
                <Description
                userType={this.state.userType}/>
                <Showcase
                userType={this.state.userType}/>
                <Footer/>
            </div>
        );
    }
}

export default withTranslation('common')(App);
