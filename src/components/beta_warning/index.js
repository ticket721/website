import { Modal, Typography } from 'antd';
import * as React from 'react';
import { withTranslation } from 'react-i18next';
import slack from '../../assets/slack.svg';
import telegram from '../../assets/telegram.svg';
import spectrum from '../../assets/spectrum.svg';
import mail from '../../assets/mail.svg';

class BetaWarning extends React.Component {
    render() {
        return <Modal
            centered={true}
            visible={this.props.open}
            title={this.props.t('beta_warning_title')}
            onCancel={this.props.close_callback}
            onOk={this.props.close_callback}
            bodyStyle={{textAlign: 'center'}}
            footer={[
                <a href={'mailto:contact@ticket721.com'} key={'mail'}>
                    <img alt={'Mail'} src={mail} className={'contact_logo'} style={{width: 30}}/>
                </a>,
                <a href={'https://join.slack.com/t/ticket721/shared_invite/enQtNjY1MTMyNzcxNTM3LTQ5YTM5ODg2NzNkNDg3ODgxNzk0ZTg3Nzg2YWY3ZjQ4NWFkZWVhNzYyMDk0NGZkY2RiZGM4OTMzNzcyZmZjODU'} target={'_blank'} key={'slack'}>
                    <img alt={'Slack'} src={slack} className={'contact_logo'} style={{width: 30}}/>
                </a>,
                <a href={'https://t.me/joinchat/GAJnuxcNZ3tcL0rsPT4OxA'} target={'_blank'} key={'telegram'}>
                    <img alt={'Telegram'} src={telegram} className={'contact_logo'} style={{width: 30}}/>
                </a>,
                <a href={'https://spectrum.chat/ticket721'} target={'_blank'} key={'spectrum'}>
                    <img alt={'Spectrum'} src={spectrum} className={'contact_logo'} style={{width: 30}}/>
                </a>
            ]}
        >
            <Typography.Text>{this.props.t('beta_warning_desc')}</Typography.Text>

        </Modal>
    }
}

export default withTranslation('common')(BetaWarning);

