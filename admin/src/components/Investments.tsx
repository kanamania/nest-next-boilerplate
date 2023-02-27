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
import ActionColumn from '../utils/ActionColumn';

export const InvestmentList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="banner" />
            <SelectField source="status" choices={[
                {id: 'pending', name:'PENDING'},
                {id: 'seeking', name:'SEEKING'},
                {id: 'invested', name:'INVESTED'},
                {id: 'failed', name:'FAILED'},
                {id: 'cancelled', name:'CANCELLED'},
            ]}/>
            <ReferenceField source="created_by" reference="users" label="Creator">
                <TextField source="first_name" />
            </ReferenceField>
            <DateField source="created_at" />
            <ActionColumn source="action"/>
        </Datagrid>
    </List>
);

export const InvestmentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" validate={[required()]} />
            <ImageInput source="banner" validate={[required()]} />
            <SelectInput source="status" choices={[
                {id: 'pending', name:'PENDING'},
                {id: 'seeking', name:'SEEKING'},
                {id: 'invested', name:'INVESTED'},
                {id: 'failed', name:'FAILED'},
                {id: 'cancelled', name:'CANCELLED'},
            ]} validate={[required()]} />
        </SimpleForm>
    </Create>
);
export const InvestmentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" validate={[required()]} />
            <ImageInput source="banner" validate={[required()]} />
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
            <ImageField source="banner" />
            <TextField source="type" />
            <SelectField source="status" choices={[
                {id: 'pending', name:'PENDING'},
                {id: 'seeking', name:'SEEKING'},
                {id: 'invested', name:'INVESTED'},
                {id: 'failed', name:'FAILED'},
                {id: 'cancelled', name:'CANCELLED'},
            ]}/>
            <DateField source="created_at" />
            <ReferenceField source="created_by" reference="users" label="Creator">
                <TextField source="first_name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);