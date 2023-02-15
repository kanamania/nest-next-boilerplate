import { Admin, Resource, ListGuesser } from "react-admin";
import apiServer from "ra-data-nestjsx-crud";
import { authProvider } from "./authProvider";
import { Dashboard } from "./Dashboard";

const dataProvider = apiServer('http://localhost:9000');

const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="users" list={ListGuesser} />
    </Admin>
);

export default App;