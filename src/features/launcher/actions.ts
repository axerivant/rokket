const actions: ActionSrc = [
	{
		name: 'Say something.',
		handler: () => {
			console.log('hello')
		}
	},
	{
		name: 'Alert something.',
		handler: () => {
			alert('MEH')
		}
	}
]

export default actions
