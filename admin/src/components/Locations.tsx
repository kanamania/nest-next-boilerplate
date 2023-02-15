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
    Create, SelectInput, required, ImageField, ImageInput, SelectField
} from 'react-admin';

export const LocationList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="description" />
            <ImageField source="banner" />
            <SelectField source="type" choices={[
                {id: 'country', name: 'COUNTRY'},
                {id: 'region', name: 'REGION'},
                {id: 'district', name: 'DISTRICT'},
                {id: 'ward', name: 'WARD'},
            ]} />
            <ReferenceField source="created_by" reference="users" label="Creator">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="created_at" />
        </Datagrid>
    </List>
);

export const LocationCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" validate={[required()]} />
            <ImageInput source="banner" validate={[required()]} />
            <SelectInput choices={[
                {id: 'country', name: 'COUNTRY'},
                {id: 'region', name: 'REGION'},
                {id: 'district', name: 'DISTRICT'},
                {id: 'ward', name: 'WARD'},
            ]} source="type" validate={[required()]} />
        </SimpleForm>
    </Create>
);
export const LocationEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" validate={[required()]} />
            <ImageInput source="banner" validate={[required()]} />
            <SelectInput source="type" choices={[
                {id: 'country', name: 'COUNTRY'},
                {id: 'region', name: 'REGION'},
                {id: 'district', name: 'DISTRICT'},
                {id: 'ward', name: 'WARD'},
            ]} validate={[required()]} />
        </SimpleForm>
    </Edit>
);

export const LocationShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="banner" />
            <SelectField source="type" choices={[
                {id: 'country', name: 'COUNTRY'},
                {id: 'region', name: 'REGION'},
                {id: 'district', name: 'DISTRICT'},
                {id: 'ward', name: 'WARD'},
            ]} />
            <DateField source="created_at" />
            <ReferenceField source="created_by" reference="users" label="Creator">
                <TextField source="name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);