import React from "react";

import { Avatar, List, Typography, Image } from "antd";
import { Div } from "lemon-reset";

import ExternalLink from "../ExternalLink/ExternalLink";

type BangAverageFootballScreenshot = {
    src: string;
    alt: string;
};

const BANG_AVERAGE_FOOTBALL_SCREENSHOTS: Array<BangAverageFootballScreenshot> = [
    {
        src: "/bang_average_football/screenshots/1.png",
        alt: "A football player dribbles the ball out of midfield in a two player multiplayer match.",
    },
    {
        src: "/bang_average_football/screenshots/2.png",
        alt: "Two players configure their starting lineups and team formations.",
    },
    {
        src: "/bang_average_football/screenshots/3.png",
        alt: "A football player celebrates scoring a goal with her teammates.",
    },
    {
        src: "/bang_average_football/screenshots/4.png",
        alt: "A player browses the main menu for their team in Story mode.",
    },
    {
        src: "/bang_average_football/screenshots/5.png",
        alt: "A player controls and watches an instant replay from an in-progress match.",
    },
    {
        src: "/bang_average_football/screenshots/6.png",
        alt: "A football player takes a corner, and the rest of the players wait to receive it in the centre.",
    },
    {
        src: "/bang_average_football/screenshots/7.png",
        alt: "A football player receives a yellow card from the referee.",
    },
    {
        src: "/bang_average_football/screenshots/8.png",
        alt: "A player attempts a training drill where they must make accurate passes to a dummy.",
    },
];

type Project = {
    title: string;
    url: string;
    description: React.ReactNode;
    avatarSrc: string;
}

const PROJECTS: Array<Project> = [
    {
        title: "bang average football",
        url: "https://www.ruairidx.com/bangaveragefootball",
        description: (
            <Div>
                <Typography.Paragraph>
                    I'm currently developing <Typography.Text strong>Bang Average Football</Typography.Text>, a fast-paced, easy-to-learn football game which is out May 10th 2024 for Windows, Mac and Linux. Play against your friends for footballing glory in multiplayer, or turn a hopeless club into national champions as player-manager in Story mode!
                </Typography.Paragraph>
                <Typography.Paragraph>
                    <ExternalLink href="https://www.ruairidx.com/bangaveragefootball">website</ExternalLink> - <ExternalLink href="https://store.steampowered.com/app/2393770/Bang_Average_Football/">steam</ExternalLink>
                </Typography.Paragraph>
                <Image.PreviewGroup>
                    <List
                        grid={{
                            gutter: 16,
                            xs: 2,
                            sm: 2,
                            md: 4,
                            lg: 4,
                            xl: 4,
                            xxl: 4,
                        }}
                        dataSource={BANG_AVERAGE_FOOTBALL_SCREENSHOTS}
                        renderItem={(screenshot) => (
                            <List.Item>
                                <Image
                                    src={screenshot.src}
                                    alt={`Screenshot of Bang Average Football - ${screenshot.alt}`}
                                    style={{ width: "100%" }}
                                />
                            </List.Item>
                        )}
                    />
                </Image.PreviewGroup>
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
];

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
