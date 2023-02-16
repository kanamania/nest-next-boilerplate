import {
    Datagrid,
    DateField,
    EmailField,
    List,
    ReferenceField,
    TextField,
    DateInput,
    Edit,
    SimpleForm,
    TextInput,
    Show,
    SimpleShowLayout,
    Create, SelectInput, required
} from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <EmailField source="email" />
            <TextField source="phone_number" />
            <TextField source="type" />
            <TextField source="creator" />
            <DateField source="created_at" />
        </Datagrid>
    </List>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="first_name" validate={[required()]} />
            <TextInput source="last_name" validate={[required()]} />
            <TextInput source="email" validate={[required()]} />
            <TextInput source="phone" validate={[required()]} />
            <SelectInput source="type" choices={[
                {id: 'investor', name:'INVESTOR'},
                {id: 'seeker', name:'SEEKER'},
                {id: 'consultant', name:'CONSULTANT'},
            ]} validate={[required()]} />
        </SimpleForm>
    </Create>
);
export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="first_name" validate={[required()]} />
            <TextInput source="last_name" validate={[required()]} />
            <TextInput source="email" validate={[required()]} />
            <TextInput source="phone" validate={[required()]} />
            <SelectInput source="type" choices={[
                {id: 'investor', name:'INVESTOR'},
                {id: 'seeker', name:'SEEKER'},
                {id: 'consultant', name:'CONSULTANT'},
            ]} validate={[required()]} />
        </SimpleForm>
    </Edit>
);

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="type" />
            <DateField source="created_at" />
            <TextField source="creator" />
        </SimpleShowLayout>
    </Show>
);