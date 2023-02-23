import {Admin, Resource, ListGuesser, ShowGuesser, EditGuesser} from "react-admin";
import apiServer from 'ra-data-nestjsx-crud';
import { authProvider } from "./authProvider";
import { Dashboard } from "./Dashboard";
import httpClient from './httpClient';
import {UserCreate, UserEdit, UserList, UserShow} from './components/Users';
import {LocationCreate, LocationEdit, LocationList, LocationShow} from './components/Locations';
import {InvestmentCreate, InvestmentEdit, InvestmentList, InvestmentShow} from './components/Investments';
import {
        InvestmentAreaCreate,
        InvestmentAreaEdit,
        InvestmentAreaList,
        InvestmentAreaShow
} from './components/InvestmentAreas';
import {
        InvestmentCategoryCreate,
        InvestmentCategoryEdit,
        InvestmentCategoryList,
        InvestmentCategoryShow
} from './components/InvestmentCategories';
import UserIcon from "@mui/icons-material/Group";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CategoryIcon from '@mui/icons-material/Category';
import Crop54Icon from '@mui/icons-material/Crop54';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';
import {FileEdit, FileShow, FileList} from './components/File';
import Configs from '../configs';
import {MainMenu} from './utils/Menu';
// @ts-ignore
const dataProvider = apiServer(Configs.API_URL, httpClient);

const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} menu={MainMenu}>
        <Resource name="locations"
                  recordRepresentation={(record) => `${record.name}`}
                  list={LocationList}
                  edit={LocationEdit}
                  show={LocationShow}
                  hasCreate={true}
                  hasShow={true}
                  create={LocationCreate}
                  icon={LocationOnIcon} />
        <Resource name="investments"
                  recordRepresentation={(record) => `${record.name}`}
                  list={InvestmentList}
                  edit={InvestmentEdit}
                  show={InvestmentShow}
                  hasCreate={true}
                  hasShow={true}
                  create={InvestmentCreate}
                  icon={CurrencyExchangeIcon} />
        <Resource name="investment/areas"
                  recordRepresentation={(record) => `${record.name}`}
                  options={{label: 'Investment Areas'}}
                  list={InvestmentAreaList}
                  edit={InvestmentAreaEdit}
                  show={InvestmentAreaShow}
                  hasCreate={true}
                  hasShow={true}
                  create={InvestmentAreaCreate}
                  icon={Crop54Icon} />
        <Resource name="investment/categories"
                  recordRepresentation={(record) => `${record.name}`}
                  options={{label: 'Investment Categories'}}
                  list={InvestmentCategoryList}
                  edit={InvestmentCategoryEdit}
                  show={InvestmentCategoryShow}
                  hasCreate={true}
                  hasShow={true}
                  create={InvestmentCategoryCreate}
                  icon={CategoryIcon} />
        <Resource name="files"
                  options={{label: 'File Manager'}}
                  list={FileList}
                  edit={FileEdit}
                  show={FileShow}
                  hasShow={true}
                  icon={FolderIcon}/>
        <Resource name="users"
                  recordRepresentation={(record) => `${record.first_name} ${record.last_name}`}
                  list={UserList}
                  edit={UserEdit}
                  show={UserShow}
                  create={UserCreate}
                  hasCreate={true}
                  hasShow={true}
                  icon={UserIcon} />
    </Admin>
);

export default App;