import React from 'react'
import AppTableRouter from "./AppTableRouter"
import { Provider } from 'react-redux'
import { store } from './store'

const IndexTableRouter = () => {
    return (
        <Provider store={store}>
            <AppTableRouter/>
        </Provider>
    )
}

export default IndexTableRouter
