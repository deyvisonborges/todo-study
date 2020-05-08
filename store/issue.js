export const state = () => ({
    issues: []
});

export const getters = {
    getIssues(state) {
        return state.issues;
    },

    deleteIssue(state) {
        return delete state.issues;
    }
}

export const mutations = {
    INSERT_ISSUE(state, data) {
        state.issues.push(data);
    }
}


