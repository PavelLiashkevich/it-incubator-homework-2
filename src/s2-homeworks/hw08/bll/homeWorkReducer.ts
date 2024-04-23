import { UserType } from '../HW8'

type ActionType =
	| { type: 'sort'; payload: 'up' | 'down' }
	| { type: 'check'; payload: number }

export const homeWorkReducer = (
	state: UserType[],
	action: ActionType
): UserType[] => {
	// need to fix any
	switch (action.type) {
		case 'sort': {
			// by name
			const copyState = [...state]

			return copyState.sort((a: UserType, b: UserType) =>
				a.name > b.name
					? action.payload === 'up'
						? 1
						: -1
					: action.payload === 'up'
					? -1
					: 1
			)
		}
		case 'check': {
			const copyState = [...state]

			return copyState.filter((a: UserType) => a.age > 18)
		}
		default:
			return state
	}
}
