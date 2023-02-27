import * as React from 'react';
import { Menu } from 'react-admin';

import BookIcon from '@mui/icons-material/Book';
import SubMenu from './SubMenu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Crop54Icon from '@mui/icons-material/Crop54';
import CategoryIcon from '@mui/icons-material/Category';
import FolderIcon from '@mui/icons-material/Folder';
import UserIcon from '@mui/icons-material/Group';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TuneIcon from '@mui/icons-material/Tune';

export const MainMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.Item to="/investments" primaryText="Investments" leftIcon={<CurrencyExchangeIcon />}/>
        <Menu.Item to="/users" primaryText="Users" leftIcon={<UserIcon />}/>
        <SubMenu primaryText="Others" leftIcon={<BookIcon />}>
            <Menu.Item to="locations" primaryText="Locations" leftIcon={<LocationOnIcon />}/>
            <Menu.Item to="investment/areas" primaryText="Investment Areas" leftIcon={<Crop54Icon />}/>
            <Menu.Item to="investment/categories" primaryText="Investment Categories" leftIcon={<CategoryIcon />}/>
            <Menu.Item to="files" primaryText="Files" leftIcon={<FolderIcon />}/>
            <Menu.Item to="settings" primaryText="Configurations" leftIcon={<TuneIcon />}/>
        </SubMenu>
    </Menu>
);