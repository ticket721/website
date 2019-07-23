import { Button, Icon, Typography } from 'antd';
import React, {Suspense} from 'react';
import { withTranslation } from 'react-i18next';
import './App.css';
import './mobile.css';
import BetaWarning from './components/beta_warning';
import LoadingLogo from './components/logo/loading';
import Slogan from './sections/slogan';
import Description from './sections/description';
import Showcase from './sections/showcase';
import Footer from './sections/footer';
import i18n from './utils/i18n';
const DynamicLogo = React.lazy(() => import('./components/logo'));


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            language: i18n.language,
            userType: 'user',
            beta_warning: false
        }
    }

    componentDidMount() {
        let tabsAnchor = document.getElementById('tabs-anchor');
        let tabs = document.getElementById('tabs');
        let slogan = document.getElementById('slogan');
        let playBtn = document.getElementById('play-btn');
        let languageSel = document.getElementById('language-sel');

        window.addEventListener('scroll', () => {
            if (tabsAnchor.getBoundingClientRect().top <= 0) {
                tabs.classList.add('fixed');
            } else {
                tabs.classList.remove('fixed');
            }

            if (slogan.getBoundingClientRect().top <= 30) {
                playBtn.classList.add('scrolled');
                languageSel.classList.add('scrolled');

            } else {
                playBtn.classList.remove('scrolled');
                languageSel.classList.remove('scrolled');
            }
        });
    }

    updateUserType(type) {
        if (this.state.userType !== type) {
            this.setState({ userType: type });
        }
    }

    openBetaWarning = () => {
        this.setState({
            beta_warning: true
        });
    }

    closeBetaWarning = () => {
        this.setState({
            beta_warning: false
        });
    }

    setLanguage = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('fr');
        } else {
            i18n.changeLanguage('en');
        }
        this.setState({
            language: i18n.language
        });
    }

    render() {
        return (
            <div className="App">
                <BetaWarning
                    open={this.state.beta_warning}
                    close_callback={this.closeBetaWarning}
                />
                <div
                    id='language-sel'
                    className='language-selector'
                    onClick={this.setLanguage}>
                    <span className={'en' + (this.state.language === 'en' ? ' selected' : '')}>
                        EN
                    </span>
                    <div className='separator'></div>
                    <span className={'fr' + (this.state.language === 'fr' ? ' selected' : '')}>
                        FR
                    </span>
                </div>
                <Button
                    id='play-btn'
                    className='play-button'
                    type={'primary'}
                    size={'large'}
                    onClick={this.openBetaWarning}
                >
                    <Typography.Text className='play-text'>
                        {this.props.t('run_app')}
                    </Typography.Text>
                    <Icon
                        className='play-icon'
                        type='caret-right' />
                </Button>
                <div className='logo-container'>
                    <Suspense fallback={<LoadingLogo/>}>
                        <DynamicLogo/>
                    </Suspense>
                </div>
                <Slogan />
                <div id='tabs-anchor'></div>
                <div
                    id='tabs'
                    className='tabs'>
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
