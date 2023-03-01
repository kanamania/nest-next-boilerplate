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
    Create, SelectInput, required, ImageField, ImageInput, SelectField, FunctionField, useGetMany
} from 'react-admin';
import ActionColumn from '../utils/ActionColumn';
import * as dayjs from 'dayjs';
import { useWatch } from 'react-hook-form';

export const LocationList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="description" />
            <SelectField source="type" choices={[
                {id: 'country', name: 'COUNTRY'},
                {id: 'region', name: 'REGION'},
                {id: 'district', name: 'DISTRICT'},
                {id: 'ward', name: 'WARD'},
            ]} />
            <TextField source="creator" />
            <FunctionField
                label="Created"
                render={(record: any) => `${dayjs(record.created_at).format('DD/MM/YYYY')}`}
            />
            <ActionColumn source="action"/>
        </Datagrid>
    </List>
);

const ParentInput = (props: any) => {
    const type = useWatch({ name: 'type' });
    const resource = type == 'ward' ? 'districts' : type == 'district' ? 'region' : 'country';
    const {data, isLoading, error} = useGetMany(`locations/${resource}`);
    const list = data ? data[type] : null;
    return (
        <SelectInput
            choices={type ? toChoices(list): []}
            {...props}
        />
    );
};
const toChoices = (items: any) => items.map((item: any) => ({ id: item, name: item }));

export const LocationCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" />
            <ImageInput source="banner" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <SelectInput choices={[
                {id: 'country', name: 'COUNTRY'},
                {id: 'region', name: 'REGION'},
                {id: 'district', name: 'DISTRICT'},
                {id: 'ward', name: 'WARD'},
            ]} source="type" validate={[required()]} />
            <ParentInput source="parent" />
        </SimpleForm>
    </Create>
);
export const LocationEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" />
            <ImageInput source="banner" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <SelectInput source="type" choices={[
                {id: 'country', name: 'COUNTRY'},
                {id: 'region', name: 'REGION'},
                {id: 'district', name: 'DISTRICT'},
                {id: 'ward', name: 'WARD'},
            ]} validate={[required()]} />
            <ParentInput source="parent" />
        </SimpleForm>
    </Edit>
);

export const LocationShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="banner_thumbnail" />
            <SelectField source="type" choices={[
                {id: 'country', name: 'COUNTRY'},
                {id: 'region', name: 'REGION'},
                {id: 'district', name: 'DISTRICT'},
                {id: 'ward', name: 'WARD'},
            ]} />
            <FunctionField
                label="Created"
                render={(record: any) => `${dayjs(record.created_at).format('DD/MM/YYYY')}`}
            />
            <TextField source="creator" />
        </SimpleShowLayout>
    </Show>
);