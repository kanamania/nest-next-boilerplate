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
    Create, SelectInput, required, ImageField, ImageInput
} from 'react-admin';

export const InvestmentAreaList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ImageField source="banner" />
            <TextField source="name" />
            <EmailField source="description" />
            <ReferenceField source="created_by" reference="users" label="Creator">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="created_at" />
        </Datagrid>
    </List>
);

export const InvestmentAreaCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" validate={[required()]} />
            <ImageInput source="icon" validate={[required()]} />
            <ImageInput source="banner" validate={[required()]} />
        </SimpleForm>
    </Create>
);
export const InvestmentAreaEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" validate={[required()]} />
            <ImageInput source="icon" validate={[required()]} />
            <ImageInput source="banner" validate={[required()]} />
        </SimpleForm>
    </Edit>
);

export const InvestmentAreaShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="icon" />
            <ImageField source="banner" />
            <DateField source="created_at" />
            <ReferenceField source="created_by" reference="users" label="Creator">
                <TextField source="name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);