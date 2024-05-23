type InitStateType = {
	themeId: number
}

const initState: InitStateType = {
	themeId: 1,
}

export const themeReducer = (
	state: InitStateType = initState,
	action: ChangeThemeIdType
): InitStateType => {
	switch (action.type) {
		case 'SET_THEME_ID': {
			return {
				...state,
				themeId: action.id,
			}
		}
		default:
			return state
	}
}

type ChangeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) =>
	({ type: 'SET_THEME_ID', id } as const)
