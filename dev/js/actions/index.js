//action creator
export const selectUser = function(user) {
    return {
        type: "USER_SELECTED",
        payload: user
    } //the action is made up of these two parts
};
