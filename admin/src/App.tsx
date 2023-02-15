import { Admin, Resource, ListGuesser } from "react-admin";
import apiServer from 'ra-data-simple-rest';
import { authProvider } from "./authProvider";
import { Dashboard } from "./Dashboard";
import httpClient from './httpClient';

// @ts-ignore
const dataProvider = apiServer('http://localhost:9000', httpClient);

const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="users" list={ListGuesser} />
    </Admin>
);

export default App;