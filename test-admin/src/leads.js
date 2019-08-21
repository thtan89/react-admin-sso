// in src/users.js
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const LeadList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="permissions" />
        </Datagrid>
    </List>
);