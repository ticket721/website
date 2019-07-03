import { Typography } from 'antd';
import * as React from 'react';
import { withTranslation } from 'react-i18next';
import coins from '../../assets/coins.svg';
import locked_wallet from '../../assets/locked_wallet.svg';
import shopping_bag from '../../assets/shopping_bag.svg';
import configure from '../../assets/configure.svg';
import store_revenue from '../../assets/store_revenue.svg';
import stats from '../../assets/stats.svg';
import './index.css';
import './mobile.css';

class Description extends React.Component {

    render() {
        return <div className='container'>
            <div className='slogan'>
                <Typography.Text className='slogan-title'>
                    {this.props.t('slogan_title')}
                </Typography.Text>
                <Typography.Text className='slogan-body'>
                    {this.props.t('slogan_body')}
                </Typography.Text>
            </div>
            <div className='user'>
                <div className='title'>
                    <Typography.Text className='text-title'>
                        {this.props.t('desc_user_title')}
                    </Typography.Text>
                    <div className='separator'></div>
                </div>
                <div className='descriptions'>
                    <div className='desc-row desc-1'>
                        <img src={coins} alt='Coins'/>
                        <div className='description'>
                            <Typography.Text>
                                {this.props.t('desc_user_desc_title_1')}
                            </Typography.Text>
                            <Typography.Text>
                                {this.props.t('desc_user_desc_body_1')}
                            </Typography.Text> 
                        </div>
                    </div>
                    <div className='desc-row desc-2'>
                        <div className='description'>
                            <Typography.Text>
                                {this.props.t('desc_user_desc_title_2')}
                            </Typography.Text>
                            <Typography.Text>
                                {this.props.t('desc_user_desc_body_2')}
                            </Typography.Text> 
                        </div>
                        <img src={locked_wallet} alt='Wallet'/>
                    </div>
                    <div className='desc-row desc-3'>
                        <img src={shopping_bag} alt='Marketplace'/>
                        <div className='description'>
                            <Typography.Text>
                                {this.props.t('desc_user_desc_title_3')}
                            </Typography.Text>
                            <Typography.Text>
                                {this.props.t('desc_user_desc_body_3')}
                            </Typography.Text> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='organiser'>
                <div className='title'>
                    <div className='separator'></div>
                    <Typography.Text className='text-title'>
                        {this.props.t('desc_organiser_title')}
                    </Typography.Text>
                </div>
                <div className='descriptions'>
                    <div className='desc-row desc-1'>
                        <img src={configure} alt='Configuring'/>
                        <div className='description'>
                            <Typography.Text>
                                {this.props.t('desc_organiser_desc_title_1')}
                            </Typography.Text>
                            <Typography.Text>
                                {this.props.t('desc_organiser_desc_body_1')}
                            </Typography.Text> 
                        </div>
                    </div>
                    <div className='desc-row desc-2'>
                        <div className='description'>
                            <Typography.Text>
                                {this.props.t('desc_organiser_desc_title_2')}
                            </Typography.Text>
                            <Typography.Text>
                                {this.props.t('desc_organiser_desc_body_2')}
                            </Typography.Text> 
                        </div>
                        <img src={store_revenue} alt='Revenue'/>
                    </div>
                    <div className='desc-row desc-3'>
                        <img src={stats} alt='Stats'/>
                        <div className='description'>
                            <Typography.Text>
                                {this.props.t('desc_organiser_desc_title_3')}
                            </Typography.Text>
                            <Typography.Text>
                                {this.props.t('desc_organiser_desc_body_3')}
                            </Typography.Text> 
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default withTranslation('common')(Description);

