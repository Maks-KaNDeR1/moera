import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ProfileActionsType } from './profile/actions';
import appReducer, { AppActionsType } from './app-reducer';
import profileReducer from './profile/reducer';

export const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppRootActionType = AppActionsType | ProfileActionsType

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppRootActionType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionType>

// @ts-ignore
window.store = store
