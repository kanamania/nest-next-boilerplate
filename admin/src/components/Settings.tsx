import {
    Datagrid,
    List,
    TextField,
    Show,
    SimpleShowLayout,
    Edit,
    SimpleForm,
    TextInput,
    SelectInput, required, Labeled, useRecordContext, FormDataConsumer, ImageField, FunctionField, SelectField
} from 'react-admin';
import ActionColumn from '../utils/ActionColumn';
import SettingField from '../utils/SettingField';

export const SettingList = () => (
    <List hasShow={true} hasEdit={true}>
        <Datagrid rowClick="show">
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="type"/>
            <TextField source="category"/>
            <TextField source="value_current" label="Value"/>
            <ActionColumn source="action"/>
        </Datagrid>
    </List>
);

export const SettingShow = (props: any) => {
    const record = useRecordContext(props);
    console.log({record, props})
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="id"/>
                <TextField source="name"/>
                <TextField source="type"/>
                <TextField source="category"/>
                <TextField source="description"/>
                <FunctionField
                    render={(record: any) => record && record.type == 'image' ? <ImageField source="image_thumbnail"/> :
                        <TextField source="value_current"/>}/>
            </SimpleShowLayout>
        </Show>
    )
};
export const SettingEdit = (props: any) => {
        return (
            <Edit {...props}>
                <SimpleForm>
                    <Labeled label="Name">
                        <TextField source="name"/>
                    </Labeled>
                    <Labeled label="Type">
                        <SelectField source="type" choices={[
                            {id: 'text', name: 'TEXT'},
                            {id: 'longtext', name: 'LONG TEXT'},
                            {id: 'email', name: 'EMAIL'},
                            {id: 'number', name: 'NUMBER'},
                            {id: 'image', name: 'IMAGE'},
                        ]}/>
                    </Labeled>
                    <Labeled label="Category">
                        <SelectField source="category" choices={[
                            {id: 'general', name: 'GENERAL'},
                        ]}/>
                    </Labeled>
                    <Labeled>
                        <FormDataConsumer>
                            {({formData, ...rest}) =>
                                <SettingField record={formData}/>
                            }
                        </FormDataConsumer>
                    </Labeled>
                </SimpleForm>
            </Edit>
        )
    }
;

