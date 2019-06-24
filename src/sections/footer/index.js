import React from 'react';
import { withTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg'
import slack from '../../assets/slack.svg';
import telegram from '../../assets/telegram.svg';
import spectrum from '../../assets/spectrum.svg';
import mail from '../../assets/mail.svg';
import './index.css';

class Footer extends React.Component {
    render() {
        return <div
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 6
            }}
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}
            >
                <img alt={''} src={logo} style={{width: 40, margin: 12}}/>
                <a href={'mailto:contact@ticket721.com'}>
                    <img alt={'Mail'} src={mail} className={'contact_logo'} style={{width: 30}}/>
                </a>
                <a href={'https://join.slack.com/t/ticket721/shared_invite/enQtNjY1MTMyNzcxNTM3LTQ5YTM5ODg2NzNkNDg3ODgxNzk0ZTg3Nzg2YWY3ZjQ4NWFkZWVhNzYyMDk0NGZkY2RiZGM4OTMzNzcyZmZjODU'} target={'_blank'}>
                    <img alt={'Slack'} src={slack} className={'contact_logo'} style={{width: 30}}/>
                </a>
                <a href={'https://t.me/joinchat/GAJnuxcNZ3tcL0rsPT4OxA'} target={'_blank'}>
                    <img alt={'Telegram'} src={telegram} className={'contact_logo'} style={{width: 30}}/>
                </a>
                <a href={'https://spectrum.chat/ticket721'} target={'_blank'}>
                    <img alt={'Spectrum'} src={spectrum} className={'contact_logo'} style={{width: 30}}/>
                </a>
            </div>
        </div>;
    }
}


export default withTranslation('common')(Footer)
