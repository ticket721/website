import { Typography } from 'antd';
import * as React from 'react';
import { withTranslation } from 'react-i18next';
import './index.css';
import './mobile.css';
import home_screen from '../../assets/home_screen.png';
import marketplace_screen from '../../assets/marketplace_screen.png';
import wallet_screen from '../../assets/wallet_screen.png';
import admin_screen from '../../assets/admin_screen.png';
import scanner_screen from '../../assets/scanner_screen.png';
import stats_screen from '../../assets/stats_screen.png';

class Showcase extends React.Component {
    constructor() {
        super();

        this.state = {
            activeTab: 'admin'
        }
    }

    componentWillReceiveProps(props) {
        if (props.userType === 'user') {
            this.updateTab('home');
        } else {
            this.updateTab('admin');
        }
    }

    render() {
        const itemData = {
            user: {
                home: {
                    name: 'HomeScreen',
                    src: home_screen
                },
                marketplace: {
                    name: 'MarketplaceScreen',
                    src: marketplace_screen
                },
                wallet: {
                    name: 'TicketsWalletScreen',
                    src: wallet_screen
                },
            },
            organiser: {
                admin: {
                    name: 'AdministrationScreen',
                    src: admin_screen
                },
                scanner: {
                    name: 'ScannerScreen',
                    src: scanner_screen
                },
                stats: {
                    name: 'StatsScreen',
                    src: stats_screen
                }
            }
        };

        let items = [];

        Object.keys(itemData[this.props.userType]).forEach((key, index) => {
            items.push(
                <div
                className={'showcase-item ' + (this.state.activeTab === key ? 'active' : '')} key={key}>
                    <Typography.Text className='showcase-subtitle'>
                        {this.props.t('showcase_' + this.props.userType + '_subtitle_' + (index + 1))}
                    </Typography.Text>
                    <Typography.Paragraph className='showcase-desc'>
                        {this.props.t('showcase_' + this.props.userType + '_body_' + (index + 1))}
                    </Typography.Paragraph>
                    <div className='showcase-screen'>
                        <img
                        className={'screen_' + key}
                        src={itemData[this.props.userType][key].src}
                        alt={itemData[this.props.userType][key].name} />
                    </div>
                </div>
            );
        });

        return <div className='showcase-container'>
            <div className='geometric-container'>
                <div></div>
                <div></div>
            </div>
            <div className='showcase-title-container'>
                <Typography.Title level={3}>
                    {this.props.t('showcase_' + this.props.userType + '_title')}
                </Typography.Title>
                <div className='showcase-tabs'>
                    <Typography.Text
                    className={this.state.activeTab === Object.keys(itemData[this.props.userType])[0] ? 'selected' : ''}
                    data-hover={this.props.t('showcase_'+ this.props.userType + '_subtitle_1')}
                    onClick={() => this.updateTab(Object.keys(itemData[this.props.userType])[0])}>
                        {this.props.t('showcase_'+ this.props.userType + '_subtitle_1')}
                    </Typography.Text>
                    <Typography.Text
                    className={this.state.activeTab === Object.keys(itemData[this.props.userType])[1] ? 'selected' : ''}
                    data-hover={this.props.t('showcase_'+ this.props.userType + '_subtitle_2')}
                    onClick={() => this.updateTab(Object.keys(itemData[this.props.userType])[1])}>
                        {this.props.t('showcase_'+ this.props.userType + '_subtitle_2')}
                    </Typography.Text>
                    <Typography.Text
                    className={this.state.activeTab === Object.keys(itemData[this.props.userType])[2] ? 'selected' : ''}
                    data-hover={this.props.t('showcase_'+ this.props.userType + '_subtitle_3')}
                    onClick={() => this.updateTab(Object.keys(itemData[this.props.userType])[2])}>
                        {this.props.t('showcase_'+ this.props.userType + '_subtitle_3')}
                    </Typography.Text>
                </div>
            </div>
            <div className='showcase-content'>
                {items}
            </div>
        </div>;
    }

    updateTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
}

export default withTranslation('common')(Showcase);

