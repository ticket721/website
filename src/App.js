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
import {Helmet} from "react-helmet";
import {
    BrowserView,
    MobileView,
} from "react-device-detect";
const DynamicDesktopLogo = React.lazy(() => import('./components/logo/desktop'));
const DynamicMobileLogo = React.lazy(() => import('./components/logo/mobile'));


class App extends React.Component {
    constructor() {
        super();


        this.state = {
            language: i18n.language,
            userType: 'organizer',
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
        if (i18n.language.indexOf('en')  === 0) {
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
                <div className="App-body">
                    <Helmet htmlAttributes={{lang: i18n.language}}>
                        <meta charset="utf-8" />
                        <link rel="shortcut icon" href="/favicon.ico" />
                        <meta name="theme-color" content="#171717" />
                        <meta name="keywords" content="Blockchain,Ethereum,ticketing,crypto,cryptocurrency,erc721,dapp"/>
                        <meta name="author" content="Ticket721"/>
                        <meta name="description" content={this.props.t('header_meta_description')}/>
                        <link rel="manifest" href="/manifest.json" />
                        <title>{this.props.t('header_title')}</title>
                        <meta property="og:title" content={this.props.t('header_title')} />
                        <meta property="og:description" content={this.props.t('header_meta_description')} />
                    </Helmet>
                    <BetaWarning
                        open={this.state.beta_warning}
                        close_callback={this.closeBetaWarning}
                    />
                    <div
                        id='language-sel'
                        className='language-selector'
                        onClick={this.setLanguage}>
                    <span className={'en' + (this.state.language.indexOf('en') === 0 ? ' selected' : '')}>
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
                        <BrowserView>
                            <Suspense fallback={<LoadingLogo/>}>
                                <DynamicDesktopLogo/>
                            </Suspense>
                        </BrowserView>
                        <MobileView>
                            <Suspense fallback={<LoadingLogo/>}>
                                <DynamicMobileLogo/>
                            </Suspense>
                        </MobileView>
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
                        <div className={'tab' + (this.state.userType === 'organizer' ? ' selected' : '')}>
                            <Typography.Text
                                data-hover={this.props.t('tab_organizer_title')}
                                onClick={() => this.updateUserType('organizer')}>
                                {this.props.t('tab_organizer_title')}
                            </Typography.Text>
                        </div>
                        <Icon
                            className={'triangle' + (this.state.userType === 'organizer' ? ' on-organizer' : '')}
                            type='caret-up' />
                    </div>
                    <Description
                        userType={this.state.userType}/>
                    <Showcase
                        userType={this.state.userType}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default withTranslation('common')(App);
