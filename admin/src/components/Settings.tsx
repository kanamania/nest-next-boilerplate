import {
    Datagrid,
    DateField,
    List,
    TextField,
    Show,
    SimpleShowLayout,
    DateInput,
    Edit,
    SimpleForm,
    TextInput,
    SelectInput, required, Labeled, EditButton, ShowButton, CreateButton, ExportButton, FilterButton, TopToolbar, DeleteButton
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import ActionColumn from '../utils/ActionColumn';

const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);
export const SettingList = () => (
    <List hasShow={true} hasEdit={true}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="type" />
            <TextField source="category" />
            <TextField source="value_current" label="Value" />
            <ActionColumn source="action"/>
        </Datagrid>
    </List>
);

export const SettingShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="type" />
            <TextField source="category" />
            <TextField source="description" />
            <TextField source="value_current" />
            <TextField source="value_default" />
        </SimpleShowLayout>
    </Show>
);

export const SettingEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <Labeled label="Description">
                <TextField source="description" />
            </Labeled>
            <Labeled label="Default">
                <TextField label="Default value" source="value_default" />
            </Labeled>
            <TextInput source="name" validate={[required()]}/>
            <SelectInput source="type" choices={[
                {id: 'text', name:'TEXT'},
                {id: 'longtext', name:'LONG TEXT'},
                {id: 'number', name:'NUMBER'},
                {id: 'image', name:'IMAGE'},
            ]} validate={[required()]} />
            <SelectInput source="category" choices={[
                {id: 'general', name:'GENERAL'},
            ]} validate={[required()]} />
            <TextInput label="Value" source="value_current" validate={[required()]}/>
        </SimpleForm>
    </Edit>
);

