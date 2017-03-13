
export function userAdd(user) {
	return dispatch => {
		dispatch({
			type: 'ADD_USER',
			user
		})
	}
}
