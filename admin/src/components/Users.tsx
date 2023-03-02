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
    Create, SelectInput, required, ImageField, FunctionField, ImageInput
} from 'react-admin';
import ActionColumn from '../utils/ActionColumn';
import * as dayjs from 'dayjs'

export const UserList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" label="" />
            <FunctionField
                label="Name"
                render={(record: any) => `${record.first_name} ${record.last_name}`}
            />
            <EmailField source="email" />
            <TextField source="phone_number" label="Phone" />
            <FunctionField
                label="Type"
                render={(record: any) => `${record.type.toUpperCase()}`}
            />
            <TextField source="creator" />
            <FunctionField
                label="Created"
                render={(record: any) => `${dayjs(record.created_at).format('DD/MM/YYYY')}`}
            />
            <ActionColumn source="action" label="" />
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
            <ImageInput source="avatar" accept="image/*">
                <ImageField source="rawFile" title="title" />
            </ImageInput>
            <SelectInput source="type" choices={[
                {id: 'investor', name:'INVESTOR'},
                {id: 'seeker', name:'SEEKER'},
                {id: 'consultant', name:'CONSULTANT'},
                {id: 'admin', name:'ADMIN'},
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
            <ImageInput source="avatar" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <SelectInput source="type" choices={[
                {id: 'investor', name:'INVESTOR'},
                {id: 'seeker', name:'SEEKER'},
                {id: 'consultant', name:'CONSULTANT'},
                {id: 'admin', name:'ADMIN'},
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
            <ImageField source="avatar_thumbnail" />
            <EmailField source="email" />
            <TextField source="phone" />
            <FunctionField
                label="Type"
                render={(record: any) => `${record.type.toUpperCase()}`}
            />
            <FunctionField
                label="Created"
                render={(record: any) => `${dayjs(record.created_at).format('DD/MM/YYYY')}`}
            />
            <TextField source="creator" />
        </SimpleShowLayout>
    </Show>
);