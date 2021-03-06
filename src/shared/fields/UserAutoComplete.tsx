import {AutocompleteInput, Error, LinearProgress, useDataProvider} from "react-admin";
import React, {useEffect, useState} from "react";

// Custom User auto completion which displays the full name of the user with the "getFullNameOfUser" method.
// Furthermore, only users which are active and verified are being displayed.
export const UserAutoComplete = (props) => {

    const dataProvider = useDataProvider();
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        dataProvider.getList('users', {
            filter: {is_verified: true, active: true}
        })
            .then(({data}) => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, [dataProvider]);

    if (error) return <Error error="Error in UserAutoComplete"/>;
    if (loading) return <LinearProgress/>;

    return (
        <AutocompleteInput {...props} source={props.source} choices={users} optionText={user => user.fullname}/>
    )
};

UserAutoComplete.defaultProps = {
    source: "user_id"
};
