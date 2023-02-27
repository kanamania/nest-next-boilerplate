import * as React from 'react';
import { Layout } from 'react-admin';
import MyAppBar from './AppBar';

const MyLayout = (props: any) => <Layout {...props} appBar={MyAppBar} />;

export default MyLayout;