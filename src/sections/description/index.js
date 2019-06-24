import { List, Typography } from 'antd';
import * as React from 'react';
import { withTranslation } from 'react-i18next';
import coins from '../../assets/coins.svg';
import locked_wallet from '../../assets/locked_wallet.svg';
import marketplace_cart from '../../assets/marketplace_cart.svg';
import configure from '../../assets/configure.svg';
import store_revenue from '../../assets/store_revenue.svg';
import stats from '../../assets/stats.svg';
import './separator.css';

class Description extends React.Component {

    render() {
        const userData = [];
        const organizerData = [];

        const metadata = {
            user: [
                {
                    icon: coins,
                    alt: 'Coins'
                },
                {
                    icon: locked_wallet,
                    alt: 'Wallet'
                },
                {
                    icon: marketplace_cart,
                    alt: 'Marketplace'
                }
            ],
            organizer: [
                {
                    icon: configure,
                    alt: 'Configuring'
                },
                {
                    icon: store_revenue,
                    alt: 'Revenue'
                },
                {
                    icon: stats,
                    alt: 'Stats'
                }
            ]
        };

        for (let i = 0; i < 3; i++) {
            userData.push(
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 15,
                    width: '100%'
                }}>
                    <img style={{width: '50%'}} src={metadata.user[i].icon} alt={metadata.user[i].alt}/>
                    <Typography.Text style={{fontSize: '1.5em', color: '#F0F2F4', fontWeight: 300, margin: 12}}>
                        {this.props.t(`description_user_${i + 1}`)}
                    </Typography.Text>
                </div>
            )

            organizerData.push(
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 15,
                    width: '100%',
                }}>
                    <img style={{width: '50%'}} src={metadata.organizer[i].icon} alt={metadata.organizer[i].alt}/>
                    <Typography.Text style={{fontSize: '1.5em', color: '#F0F2F4', fontWeight: 300, margin: 12}}>
                        {this.props.t(`description_organizer_${i + 1}`)}
                    </Typography.Text>
                </div>
            )
        }

        return <div
            style={{
                width: '100%',
                padding: 25,
                paddingTop: 150,
                paddingBottom: 100,
                backgroundColor: '#131313',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <Typography.Text
                style={{
                    fontSize: 48,
                    color: '#F0F2F4',
                    fontWeight: 100,
                    fontFamily: 'Roboto'
                }}
            >
                {this.props.t('slogan_title')}
            </Typography.Text>
            <Typography.Text
                style={{
                    fontSize: 24,
                    color: '#F0F2F4',
                    fontWeight: 300,
                    fontFamily: 'Roboto',
                    marginTop: 24
                }}
            >
                {this.props.t('slogan_body')}
            </Typography.Text>
            <div
                className='user-organizer-container'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '100%',
                    boxSizing: 'border-box',
                    marginTop: 150
                }}
            >
                <List
                    style={{
                        flex: '1 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: 10
                    }}
                    header={
                        <div style={{marginBottom: 36}}>
                            <Typography.Text style={{fontSize: 36, color: '#F0F2F4', marginBottom: 24, width: '80%'}}>
                                {this.props.t('description_user_title')}
                            </Typography.Text>
                        </div>
                    }
                    dataSource={userData}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )
                    }
                />
                <List
                    style={{
                        flex: '1 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: 10,
                    }}
                    header={
                        <div style={{marginBottom: 36}}>
                            <Typography.Text style={{fontSize: 36, color: '#F0F2F4', marginBottom: 24, width: '80%'}}>
                                {this.props.t('description_organizer_title')}
                            </Typography.Text>
                        </div>
                    }
                    dataSource={organizerData}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )
                    }
                />
            </div>
        </div>;
    }
}

export default withTranslation('common')(Description);

