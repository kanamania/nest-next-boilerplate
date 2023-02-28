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
    Create, SelectInput, required, ImageField, ImageInput, FunctionField
} from 'react-admin';
import ActionColumn from '../utils/ActionColumn';
import * as dayjs from 'dayjs';

export const InvestmentAreaList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="description" />
            <TextField source="creator" />
            <FunctionField
                label="Created"
                render={(record: any) => `${dayjs(record.created_at).format('DD/MM/YYYY')}`}
            />
            <ActionColumn source="action"/>
        </Datagrid>
    </List>
);

export const InvestmentAreaCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" validate={[required()]} />
            <ImageInput source="icon" accept="image/*" validate={[required()]}>
                <ImageField source="src" title="title" />
            </ImageInput>
            <ImageInput source="banner" accept="image/*" validate={[required()]}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);
export const InvestmentAreaEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" validate={[required()]} />
            <ImageInput source="icon" accept="image/*" validate={[required()]}>
                <ImageField source="src" title="title" />
            </ImageInput>
            <ImageInput source="banner" accept="image/*" validate={[required()]}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const InvestmentAreaShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="icon_url" />
            <ImageField source="banner_thumbnail" />
            <FunctionField
                label="Created"
                render={(record: any) => `${dayjs(record.created_at).format('DD/MM/YYYY')}`}
            />
            <TextField source="creator" />
        </SimpleShowLayout>
    </Show>
);