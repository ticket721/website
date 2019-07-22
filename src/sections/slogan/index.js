import { Typography } from 'antd';
import * as React from 'react';
import { withTranslation } from 'react-i18next';
import './index.css';
import './mobile.css';

class Slogan extends React.Component {

    render() {
        return <div className='slogan'>
            <Typography.Title>
                {this.props.t('slogan_title')}
            </Typography.Title>
            <Typography.Text className='slogan-body'>
                {this.props.t('slogan_body')}
            </Typography.Text>
        </div>;
    }
}

export default withTranslation('common')(Slogan);

