import {FormDataConsumer, ImageField, ImageInput, Labeled, NumberInput, TextInput, useRecordContext} from 'react-admin';

const SettingField = (props: { record: any }) => {
    switch (props.record.type) {
        case 'email':
            return (<TextInput type="email" source="value_current"/>);
            break;
        case 'image':
            return (
                <>
                    <ImageInput source="value_current" label="Value">
                        <ImageField source="src" title="title"/>
                    </ImageInput>
                    <FormDataConsumer>
                        {({formData, ...rest}) => {
                            if (!formData.src) {
                                return (
                                    <div>
                                        <Labeled label="Saved Image">
                                            <ImageField source="image_thumbnail" {...rest}/>
                                        </Labeled>
                                    </div>
                                );
                            }
                        }}
                    </FormDataConsumer>
                </>
            );
            break;
        case 'longtext':
            return (<TextInput fullWidth={true} source="value_current"/>);
            break;
        case 'number':
            return (<NumberInput source="value_current"/>);
            break;
        default:
        case 'text':
            return (<TextInput source="value_current"/>);
            break;
    }
}
export default SettingField;