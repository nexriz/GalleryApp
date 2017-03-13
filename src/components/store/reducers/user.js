

export default (state={}, action) => {
	if(action.type === 'ADD_USER') return action.user;
	else return {}
}