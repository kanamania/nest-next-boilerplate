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

export const InvestmentCategoryList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="creator" />
            <FunctionField
                label="Created"
                render={(record: any) => `${dayjs(record.created_at).format('DD/MM/YYYY')}`}
            />
            <ActionColumn source="action"/>
        </Datagrid>
    </List>
);

export const InvestmentCategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" />
            <ImageInput source="banner" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <ImageField source="banner_thumbnail" />
        </SimpleForm>
    </Create>
);
export const InvestmentCategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" />
            <ImageInput source="banner" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <ImageField source="banner_thumbnail" />
        </SimpleForm>
    </Edit>
);

export const InvestmentCategoryShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="banner_thumbnail" />
            <FunctionField
                label="Created"
                render={(record: any) => `${dayjs(record.created_at).format('DD/MM/YYYY')}`}
            />
                <TextField source="creator" />
        </SimpleShowLayout>
    </Show>
);