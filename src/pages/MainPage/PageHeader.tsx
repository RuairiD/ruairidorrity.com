import React from "react";

import { Typography } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { Span, Div } from "lemon-reset";

import ExternalLink from "../../components/ExternalLink/ExternalLink";

type Social = {
    icon: React.ReactNode;
    url: string;
}

const SOCIALS: Array<Social> = [
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
        url: "mailto:ruairidorrity@gmail.com",
    },
];

const SocialLink = ({
    icon,
    url,
}: Social) => (
    <Span className="social-link">
        <ExternalLink href={url}>{icon}</ExternalLink>
    </Span>
);

const PageHeader = () => (
    <Div className="page-header">
        <Typography.Title className="page-header__title">
            ruairi dorrity
        </Typography.Title>
        <Typography.Title level={5} className="page-header__pronunciation">
            /rɔːri dɒɻɪti/
        </Typography.Title>
        <Typography.Title level={4}>
            {SOCIALS.map((social, i) => 
                <SocialLink key={i} {...social} />
            )}
        </Typography.Title>
    </Div>
);

export default PageHeader;
