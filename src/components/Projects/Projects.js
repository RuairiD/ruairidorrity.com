import React from 'react';

import { Avatar, List, Typography } from 'antd';
import { Div, Img } from 'lemon-reset';

import ExternalLink from '../ExternalLink/ExternalLink';

const BANG_AVERAGE_FOOTBALL_SCREENSHOTS = [
    {
        src: '/bang_average_football/screenshots/1.png',
        alt: '',
    },
    {
        src: '/bang_average_football/screenshots/2.png',
        alt: '',
    },
    {
        src: '/bang_average_football/screenshots/3.png',
        alt: '',
    },
    {
        src: '/bang_average_football/screenshots/4.png',
        alt: '',
    },
    {
        src: '/bang_average_football/screenshots/5.png',
        alt: '',
    },
    {
        src: '/bang_average_football/screenshots/6.png',
        alt: '',
    },
    {
        src: '/bang_average_football/screenshots/7.png',
        alt: '',
    },
    {
        src: '/bang_average_football/screenshots/8.png',
        alt: '',
    },
];

const PROJECTS = [
    {
        title: "bang average football",
        url: "https://bangaverage.games/football",
        description: (
            <Div>
                <Typography.Paragraph>
                    I'm currently developing <Typography.Text strong>Bang Average Football</Typography.Text>, a fast-paced, easy-to-learn football game for Windows, Mac and Linux. Play against your friends for footballing glory in multiplayer, or turn a hopeless club into national champions as player-manager in Story mode!
                </Typography.Paragraph>
                <Typography.Paragraph>
                    <ExternalLink href="https://bangaverage.games/football">website</ExternalLink> - <ExternalLink href="https://store.steampowered.com/app/2393770/Bang_Average_Football/">steam</ExternalLink>
                </Typography.Paragraph>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 4,
                        xxl: 4,
                    }}
                    dataSource={BANG_AVERAGE_FOOTBALL_SCREENSHOTS}
                    renderItem={(screenshot) => (
                        <List.Item>
                            <ExternalLink href={screenshot.src}>
                                <Img
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                    style={{ width: "100%" }}
                                />
                            </ExternalLink>
                        </List.Item>
                    )}
                />
            </Div>
        ),
        avatarSrc: "/bang_average_football/icon.png",
    },
    {
        title: "how's my track?",
        url: "https://www.howsmytrack.com",
        description: (
            <Div>
                <Typography.Paragraph>
                    <Typography.Text strong>how's my track?</Typography.Text> is a website for musicians to share their work and solicit feedback from each other. Users may submit one track for feedback per day. Users are then put into groups of around four. Each user can then listen to each other's submitted track and leave feedback. Once a user has left feedback for everyone in their group, the feedback left for their own track will be visible to them.
                </Typography.Paragraph>
                <Typography.Paragraph>
                    source: <ExternalLink href="https://github.com/ruairid/howsmytrack-api">api</ExternalLink> - <ExternalLink href="https://github.com/ruairid/howsmytrack-web">web</ExternalLink>
                </Typography.Paragraph>
            </Div>
        ),
        avatarSrc: "https://www.howsmytrack.com/logo128.png",
    },
]

const Projects = () => (
    <List
        itemLayout="horizontal"
        dataSource={PROJECTS}
        renderItem={project => (
            <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size="large" src={project.avatarSrc} />}
                  title={<ExternalLink href={project.url}>{project.title}</ExternalLink>}
                  description={project.description}
                />
            </List.Item>
        )}
    />
);

export default Projects;
