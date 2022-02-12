import React from 'react';
import { Layout } from 'antd';
import { checkBrowserCompatibility } from 'vim-wasm';
import VimDemo1 from '../demo1/VimDemo1';
import VimDemo2 from '../demo2/VimDemo2';
import VimDemo3 from '../demo3/VimDemo3';
import styles from './layout.less';

const { Content } = Layout;

// 判断浏览器是否支持 vim-wasm
const errmsg = checkBrowserCompatibility();
if (errmsg) {
    alert(errmsg);
}

const LayoutComponent: React.FC = () => (
    <Layout>
        <Content className={styles.content}>
            {/* <VimDemo1 /> */}
            {/* <VimDemo2 /> */}
            <VimDemo3 />
        </Content>
    </Layout>
);

export default LayoutComponent;
