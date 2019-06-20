import { List, Typography } from 'antd';
import * as React from 'react';
import { withTranslation } from 'react-i18next';
import bg_repeat from '../../assets/bg_repeat.svg';
import coins from '../../assets/coins.png';
import locked_wallet from '../../assets/locked_wallet.png';
import marketplace_cart from '../../assets/marketplace_cart.png';
import configure from '../../assets/configure.png';
import store_revenue from '../../assets/store_revenue.png'
import stats from '../../assets/stats.png'

class Description extends React.Component {

    render() {

        const data = [
            <div
                style={{
                    height: '100%',
                    textAlign: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div style={{marginBottom: 36}}>
                    <Typography.Text style={{fontSize: 36, color: '#F0F2F4', marginBottom: 24}}>
                        {this.props.t('description_user_title')}
                    </Typography.Text>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                    width: '100%'
                }}>
                    <img style={{width: '50%'}} src={coins} alt={'Coins'}/>
                    <Typography.Text style={{fontSize: 26, color: '#F0F2F4', fontWeight: 300, margin: 12}}>
                        {this.props.t('description_user_1')}
                    </Typography.Text>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                    width: '100%'
                }}>
                    <img style={{width: '50%'}} src={locked_wallet} alt={'Wallet'}/>
                    <Typography.Text style={{fontSize: 26, color: '#F0F2F4', fontWeight: 300, margin: 12}}>
                        {this.props.t('description_user_2')}
                    </Typography.Text>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                    width: '100%'
                }}>
                    <img style={{width: '50%'}} src={marketplace_cart} alt={'Marketplace'}/>
                    <Typography.Text style={{fontSize: 26, color: '#F0F2F4', fontWeight: 300, margin: 12}}>
                        {this.props.t('description_user_3')}
                    </Typography.Text>
                </div>
            </div>,
            <div
                style={{
                    height: '100%',
                    textAlign: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div style={{marginBottom: 36}}>
                    <Typography.Text style={{fontSize: 36, color: '#F0F2F4', marginBottom: 24}}>
                        {this.props.t('description_organizer_title')}
                    </Typography.Text>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                    width: '100%'
                }}>
                    <img style={{width: '50%'}} src={configure} alt={'Configuring'}/>
                    <Typography.Text style={{fontSize: 26, color: '#F0F2F4', fontWeight: 300, margin: 12}}>
                        {this.props.t('description_organizer_1')}
                    </Typography.Text>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                    width: '100%'
                }}>
                    <img style={{width: '50%'}} src={store_revenue} alt={'Revenue'}/>
                    <Typography.Text style={{fontSize: 26, color: '#F0F2F4', fontWeight: 300, margin: 12}}>
                        {this.props.t('description_organizer_2')}
                    </Typography.Text>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                    width: '100%'
                }}>
                    <img style={{width: '50%'}} src={stats} alt={'Stats'}/>
                    <Typography.Text style={{fontSize: 26, color: '#F0F2F4', fontWeight: 300, margin: 12}}>
                        {this.props.t('description_organizer_3')}
                    </Typography.Text>
                </div>
            </div>
        ];

        return <div
            style={{
                width: '100%',
                backgroundImage: `url('${bg_repeat}')`,
                backgroundRepeat: 'repeat',
                backgroundSize: 50,
                boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            }}
        >
            <div
                style={{
                    width: '100%',
                    padding: 25,
                    paddingTop: 100,
                    paddingBottom: 100,
                    backgroundImage: `linear-gradient(135deg, #212121 30%, transparent 30%, transparent 70%, #212121 30%)`,
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
                <List
                    style={{width: '70%', marginTop: 100}}
                    grid={{
                        xs: 1,
                        sm: 1,
                        md: 1,
                        lg: 2,
                        xl: 2,
                        xxl: 2,
                    }}
                    dataSource={data}
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

