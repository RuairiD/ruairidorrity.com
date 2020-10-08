import React from 'react';

import { Card, Layout, List, Typography } from 'antd';

import ExternalLink from '../ExternalLink/ExternalLink';

const RECORDS = [
    {
        title: "waiting for bad news ep",
        url: "https://album.link/i/1484568549",
        coverSrc: "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/7d/ad/36/7dad3688-665c-b360-4631-470c24b32921/source/512x512bb.jpg",
    },
    {
        title: "sturzflug",
        url: "https://song.link/i/1517129229",
        coverSrc: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/a1/e8/d0/a1e8d0ea-8703-0fda-f7c9-450a4223a610/source/512x512bb.jpg",
    },
    {
        title: "the ice beneath our feet",
        url: "https://song.link/i/1517129664",
        coverSrc: "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/36/3c/b7/363cb7d6-231b-570a-bfbf-45e238ff2a10/source/512x512bb.jpg",
    },
]

const Thumbnail = ({
    title,
    url,
    coverSrc,
}) => (
    <ExternalLink href={url}>
        <img alt={title} style={{ width: "100%" }} src={coverSrc} />
    </ExternalLink>
);

const Record = ({
    title,
    url,
    coverSrc,
}) => (
    <Card style={{ width: '100%' }} cover={<Thumbnail title={title} url={url} coverSrc={coverSrc} />}>
        <Card.Meta
            title={title}
            description={<ExternalLink href={url}>Stream</ExternalLink>}
        />
    </Card>
);

const Music = () => (
    <Layout>
        <Layout.Content>
            <Typography.Paragraph>
                I release music under the name <Typography.Text strong>ruairi dx</Typography.Text>, both self-released and through small labels such as <ExternalLink href="https://www.nightswimradio.com/">Night Swim Radio</ExternalLink>, <ExternalLink href="https://twitter.com/smilehighclubCA">The Smile High Club</ExternalLink> and <ExternalLink href="https://phuturecollective.com/">Phuture Collective</ExternalLink>.
            </Typography.Paragraph>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                }}
                dataSource={RECORDS}
                renderItem={record => (
                    <List.Item>
                        <Record {...record} />
                    </List.Item>
                )}
            />
        </Layout.Content>
    </Layout>
);

export default Music;
