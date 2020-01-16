import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="firstname" />
            <TextField source="lastname" />
            <ReferenceField label="Rank" source="rank_id" reference="ranks" sortBy="id">
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);
