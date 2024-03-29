import { Divider, Layout } from "antd";
import { Div } from "lemon-reset";

import About from "../../components/About/About";
import PageHeader from "./PageHeader";
import ExternalLink from "../../components/ExternalLink/ExternalLink";

const MainPage = () => (
    <Layout className="page-container">
        <Div className="page-container-inner">
            <Layout.Content className="page-content">
                <Layout className="content">
                    <PageHeader />
                    <Divider />
                    <Layout.Content>
                        <About />
                    </Layout.Content>
                </Layout>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: "center" }}>
                <Divider />
                <ExternalLink href="https://github.com/ruairid/ruairidorrity.com">source</ExternalLink>
            </Layout.Footer>
        </Div>
    </Layout>
);

export default MainPage;
