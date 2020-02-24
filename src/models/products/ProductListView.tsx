import * as React from 'react';
import {
    BooleanField,
    BooleanInput,
    ChipField,
    Datagrid,
    Filter,
    List,
    NumberField,
    ReferenceArrayField,
    SingleFieldList,
    TextField,
    TextInput
} from 'react-admin';
import {CurrencyInCentsField} from "../../shared/fields/CurrencyInCents";
import TimestampField from "../../shared/fields/TimestampField";


// Mark all products that are inactive with a darker row background
const productRowStyle = (record, index) => ({
    backgroundColor: record.active ? '' : '#212121',
});

export const ProductList = (props: any) => (
    <List
        {...props}
        bulkActionButtons={false}>
        <Datagrid rowStyle={productRowStyle} rowClick="edit">
            <NumberField source="id"/>
            <TextField source="name" />
            <CurrencyInCentsField source="price"/>
            <TimestampField source="creation_date"/>
            <TextField source="barcode"/>
            <BooleanField source="active"/>
            <BooleanField source="countable"/>
            <BooleanField source="revocable"/>
            <ReferenceArrayField label="Tags" reference="tags" source="tags">
                <SingleFieldList>
                    <ChipField source="name"/>
                </SingleFieldList>
            </ReferenceArrayField>
        </Datagrid>
    </List>
);
