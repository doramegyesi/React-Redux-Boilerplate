import React from "react";
import UserList from "../containers/user_list";
import UserDetail from "../containers/user_details";
require("../../scss/style.scss");

const App = function() {
    return(
        <div>
            <h2>User List:</h2>
            <UserList />
            <hr/>
            <h2>User Details:</h2>
            <UserDetail />
        </div>
    );
}

export default App;
