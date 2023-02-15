import {Admin, Resource, ListGuesser, ShowGuesser, EditGuesser} from "react-admin";
import apiServer from 'ra-data-nestjsx-crud';
import { authProvider } from "./authProvider";
import { Dashboard } from "./Dashboard";
import httpClient from './httpClient';
import {UserCreate, UserEdit, UserList, UserShow} from './components/Users';

// @ts-ignore
const dataProvider = apiServer('http://localhost:9000', httpClient);

const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="locations" list={ListGuesser} />
        <Resource name="investments" list={ListGuesser} />
        <Resource name="investment/areas" options={{label: 'Investment Areas'}} list={ListGuesser} />
        <Resource name="investment/categories" options={{label: 'Investment Categories'}} list={ListGuesser} />
        <Resource name="users"
                  recordRepresentation={(record) => `${record.first_name} ${record.last_name}`}
                  list={UserList}
                  edit={UserEdit}
                  show={UserShow}
                  create={UserCreate}
                  hasCreate={true}
        />
    </Admin>
);

export default App;