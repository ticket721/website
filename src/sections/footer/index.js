import { Typography } from 'antd';
import React from 'react';
import { withTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg'
import slack from '../../assets/slack.png';
import telegram from '../../assets/telegram.png';
import spectrum from '../../assets/spectrum.png';
import mail from '../../assets/mail.png';
import './index.css';

class Footer extends React.Component {
    render() {
        return <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 24
            }}
        >
            <div>
                <Typography.Text style={{fontSize: 22, fontWeight: 300}}>{this.props.t('chat_with_us')}</Typography.Text>
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <a href={'https://join.slack.com/t/ticket721/shared_invite/enQtNjY1MTMyNzcxNTM3LTQ5YTM5ODg2NzNkNDg3ODgxNzk0ZTg3Nzg2YWY3ZjQ4NWFkZWVhNzYyMDk0NGZkY2RiZGM4OTMzNzcyZmZjODU'} target={'_blank'}>
                    <img alt={'Slack'} src={slack} className={'contact_logo'}/>
                </a>
                <a href={'https://t.me/joinchat/GAJnuxcNZ3tcL0rsPT4OxA'} target={'_blank'}>
                    <img alt={'Telegram'} src={telegram} className={'contact_logo'}/>
                </a>
                <a href={'https://spectrum.chat/ticket721'} target={'_blank'}>
                    <img alt={'Spectrum'} src={spectrum} className={'contact_logo'}/>
                </a>
                <a href={'mailto:contact@ticket721.com'}>
                    <img alt={'Mail'} src={mail} className={'contact_logo'}/>
                </a>
            </div>
            <div style={{marginTop: 24}}>
                <img alt={''} src={logo} style={{width: 50}}/>
            </div>
        </div>;
    }
}


export default withTranslation('common')(Footer)
