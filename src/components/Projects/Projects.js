import React from 'react';

import { Avatar, List, Typography } from 'antd';

import ExternalLink from '../ExternalLink/ExternalLink';

const PROJECTS = [
    {
        title: "how's my track?",
        url: "https://www.howsmytrack.com",
        description: (
            <div>
                <Typography.Paragraph>
                    <Typography.Text strong>how's my track?</Typography.Text> is a website for musicians to share their work and solicit feedback from each other. Users may submit one track for feedback per day. Users are then put into groups of around four. Each user can then listen to each other's submitted track and leave feedback. Once a user has left feedback for everyone in their group, the feedback left for their own track will be visible to them.
                </Typography.Paragraph>
                <Typography.Paragraph>
                    source: <ExternalLink href="https://github.com/ruairid/howsmytrack-api">api</ExternalLink> - <ExternalLink href="https://github.com/ruairid/howsmytrack-web">web</ExternalLink>
                </Typography.Paragraph>
            </div>
        ),
        avatarSrc: "https://www.howsmytrack.com/logo128.png",
    },
    {
        title: "picotracker",
        url: "https://picotracker.ruairidx.com",
        description: (
            <div>
                <Typography.Paragraph>
                    <Typography.Text strong>picotracker</Typography.Text> is a game discovery system for the <a target="_blank" rel="noopener noreferrer" href="https://www.lexaloffle.com/pico-8.php">PICO-8</a> fantasy console. Games are conventionally published on the official BBS/forum, which does not offer any much in the way of sophisticated sorting. <Typography.Text strong>picotracker</Typography.Text> aims to remedy this by regularly checking the BBS for new games and tracking them with a custom rating system that prioritises games with high engagement, while penalising less recent games.
                </Typography.Paragraph>
                <Typography.Paragraph>
                    source: <ExternalLink href="https://github.com/ruairid/picotracker-api">api</ExternalLink> - <ExternalLink href="https://github.com/ruairid/picotracker-web">web</ExternalLink>
                </Typography.Paragraph>
            </div>
        ),
        avatarSrc: "https://picotracker.ruairidx.com/logo192.png",
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
