import { Typography } from 'antd';
import * as React from 'react';
import { withTranslation } from 'react-i18next';
import coins from '../../assets/coins.svg';
import locked_wallet from '../../assets/locked_wallet.svg';
import shopping_bag from '../../assets/shopping_bag.svg';
import pre_purchased from '../../assets/pre_purchased.svg';
import configure from '../../assets/configure.svg';
import store_revenue from '../../assets/store_revenue.svg';
import stats from '../../assets/stats.svg';
import stock from '../../assets/stock.svg';
import './index.css';
import './mobile.css';

class Description extends React.Component {

    render() {
        const iconData = {
            user: [
                {
                    name: 'Coins',
                    src: coins
                },
                {
                    name: 'Wallet',
                    src: locked_wallet
                },
                {
                    name: 'Marketplace',
                    src: shopping_bag
                },
                {
                    name: 'Goods',
                    src: pre_purchased
                }
            ],
            organizer: [
                {
                    name: 'Configuring',
                    src: configure
                },
                {
                    name: 'Revenue',
                    src: store_revenue
                },
                {
                    name: 'Stats',
                    src: stats
                },
                {
                    name: 'Stock',
                    src: stock
                }
            ]
        };

        return <div className={'desc-container ' + this.props.userType}>
            <div className='descriptions'>
                <div className='desc-row desc-1'>
                    <img
                    src={iconData[this.props.userType][0].src}
                    alt={iconData[this.props.userType][0].name}/>
                    <div className='description'>
                        <Typography.Title level={3}>
                            {this.props.t('desc_' + this.props.userType + '_title_1')}
                        </Typography.Title>
                        <Typography.Text>
                            {this.props.t('desc_' + this.props.userType + '_body_1')}
                        </Typography.Text> 
                    </div>
                </div>
                <div className='desc-row desc-2'>
                    <div className='description'>
                        <Typography.Title level={3}>
                            {this.props.t('desc_' + this.props.userType + '_title_2')}
                        </Typography.Title>
                        <Typography.Text>
                            {this.props.t('desc_' + this.props.userType + '_body_2')}
                        </Typography.Text> 
                    </div>
                    <img
                    src={iconData[this.props.userType][1].src}
                    alt={iconData[this.props.userType][1].name}/>
                </div>
                <div className='desc-row desc-3'>
                    <img
                    src={iconData[this.props.userType][2].src}
                    alt={iconData[this.props.userType][2].name}/>
                    <div className='description'>
                        <Typography.Title level={3}>
                            {this.props.t('desc_' + this.props.userType + '_title_3')}
                        </Typography.Title>
                        <Typography.Text>
                            {this.props.t('desc_' + this.props.userType + '_body_3')}
                        </Typography.Text> 
                    </div>
                </div>
                <div className='desc-row desc-4'>
                    <div className='description'>
                        <Typography.Title level={3}>
                            {this.props.t('desc_' + this.props.userType + '_title_4')}
                        </Typography.Title>
                        <Typography.Text>
                            {this.props.t('desc_' + this.props.userType + '_body_4')}
                        </Typography.Text> 
                    </div>
                    <img
                    src={iconData[this.props.userType][3].src}
                    alt={iconData[this.props.userType][3].name}/>
                </div>
            </div>
        </div>;
    }
}

export default withTranslation('common')(Description);

