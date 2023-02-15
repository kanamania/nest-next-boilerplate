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
    Create, SelectInput, required, ImageField, ImageInput, SelectField, NumberField
} from 'react-admin';

export const FileList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ImageField source="preview" />
            <TextField source="name" />
            <TextField source="path" />
            <TextField source="mime" />
            <NumberField source="size" />
            <TextField source="record_type" />
            <NumberField source="record_id" />
        </Datagrid>
    </List>
);

export const FileEdit = () => (
    <Edit>
        <SimpleForm>
            <ImageInput source="banner" validate={[required()]} />
        </SimpleForm>
    </Edit>
);

export const FileShow = () => (
    <Show>
        <SimpleShowLayout>
            <ImageField source="preview" />
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="path" />
            <TextField source="mime" />
            <NumberField source="size" />
            <TextField source="record_type" />
            <NumberField source="record_id" />
            <ReferenceField source="created_by" reference="users" label="Creator">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="created_at" />
        </SimpleShowLayout>
    </Show>
);