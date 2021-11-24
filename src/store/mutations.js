export default {
    change_user_data(state, user) {
        state.user.id = user.id;
        state.user.name = user.name;
    }
}