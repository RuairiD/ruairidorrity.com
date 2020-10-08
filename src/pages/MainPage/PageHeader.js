import React from 'react';

import { Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';


import ExternalLink from '../../components/ExternalLink/ExternalLink';


const SOCIALS = [
    {
        icon: (<GithubOutlined />),
        url: "https://github.com/RuairiD",
    },
    {
        icon: (<LinkedinOutlined />),
        url: "https://www.linkedin.com/in/ruairi-dorrity-438919102/",
    },
    {
        icon: (<MailOutlined />),
        url: "mailto:me@ruairidorrity.com",
    },
];

const SocialLink = ({
    icon,
    url,
}) => (
    <span className="social-link">
        <ExternalLink href={url}>{icon}</ExternalLink>
    </span>
)

const PageHeader = () => (
    <div className="page-header">
        <Typography.Title className="page-header__title">
            ruairi dorrity
        </Typography.Title>
        <Typography.Title level={5} className="page-header__pronunciation">
            /rɔːri dɒrɪti/
        </Typography.Title>
        <Typography.Title level={4}>
            {SOCIALS.map((social, i) => 
                <SocialLink key={i} {...social} />
            )}
        </Typography.Title>
    </div>
);

export default PageHeader;
