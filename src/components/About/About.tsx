import React from "react";

import { Layout, Typography, Tabs, Tooltip } from "antd";

import Projects from "../Projects/Projects";
import Music from "../Music/Music";
import ExternalLink from "../ExternalLink/ExternalLink";

const About = () => (
    <Layout>
        <Layout.Content>
            <Typography.Title level={3}>Hello!</Typography.Title>
            <Typography.Paragraph>
                I'm Ruairi Dorrity, a full-stack software engineer based in San Francisco. I studied Computer Science at the University of Cambridge before moving to the US. Right now, I do full-stack things at <ExternalLink href="https://www.airtable.com/about">Airtable</ExternalLink>. Outside of work, I spend most of my time making video games, making music, playing Scrabble, and watching, playing or talking about <Tooltip title="⚽, not 🏈">football</Tooltip>.
            </Typography.Paragraph>
            <Typography.Paragraph>
                Sometimes I do other stuff as well:
            </Typography.Paragraph>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Projects" key="1">
                    <Projects />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Music" key="2">
                    <Music />
                </Tabs.TabPane>
            </Tabs>
        </Layout.Content>
    </Layout>
);

export default About;
