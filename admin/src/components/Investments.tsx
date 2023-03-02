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
    Create, SelectInput, required, ImageField, ImageInput, SelectField, FunctionField
} from 'react-admin';
import ActionColumn from '../utils/ActionColumn';
import * as dayjs from 'dayjs';

export const InvestmentList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <SelectField source="status" choices={[
                {id: 'pending', name:'PENDING'},
                {id: 'seeking', name:'SEEKING'},
                {id: 'invested', name:'INVESTED'},
                {id: 'failed', name:'FAILED'},
                {id: 'cancelled', name:'CANCELLED'},
            ]}/>
            <TextField source="creator" />
            <FunctionField
                label="Created"
                render={(record: any) => `${dayjs(record.created_at).format('DD/MM/YYYY')}`}
            />
            <ActionColumn source="action"/>
        </Datagrid>
    </List>
);

export const InvestmentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" validate={[required()]} />
            <ImageInput source="banner" accept="image/*" validate={[required()]}>
                <ImageField source="src" title="title" />
            </ImageInput>
            <SelectInput source="status" choices={[
                {id: 'pending', name:'PENDING'},
                {id: 'seeking', name:'SEEKING'},
                {id: 'invested', name:'INVESTED'},
                {id: 'failed', name:'FAILED'},
                {id: 'cancelled', name:'CANCELLED'},
            ]} validate={[required()]} defaultValue='pending'/>
        </SimpleForm>
    </Create>
);
export const InvestmentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" validate={[required()]} />
            <ImageInput source="banner" accept="image/*" validate={[required()]}>
                <ImageField source="src" title="title" />
            </ImageInput>
            <ImageField source="banner_thumbnail" />
            <SelectInput source="status" choices={[
                {id: 'pending', name:'PENDING'},
                {id: 'seeking', name:'SEEKING'},
                {id: 'invested', name:'INVESTED'},
                {id: 'failed', name:'FAILED'},
                {id: 'cancelled', name:'CANCELLED'},
            ]} validate={[required()]} />
        </SimpleForm>
    </Edit>
);

export const InvestmentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="banner_thumbnail" />
            <TextField source="type" />
            <SelectField source="status" choices={[
                {id: 'pending', name:'PENDING'},
                {id: 'seeking', name:'SEEKING'},
                {id: 'invested', name:'INVESTED'},
                {id: 'failed', name:'FAILED'},
                {id: 'cancelled', name:'CANCELLED'},
            ]}/>
            <FunctionField
                label="Created"
                render={(record: any) => `${dayjs(record.created_at).format('DD/MM/YYYY')}`}
            />
            <TextField source="creator" />
        </SimpleShowLayout>
    </Show>
);