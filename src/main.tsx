import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './app.css'
import {SnackbarProvider} from "notistack";

import {RouterProvider} from "react-router-dom";
import router from "@app/router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SnackbarComponentSuccess} from "@app/components/snackbar/type-component/succes";
import {SnackbarComponentError, SnackbarComponentInfo, SnackbarComponentWarning} from "@app/components/snackbar";

const client = new QueryClient({
    defaultOptions: {
        mutations: {
            retry: false,
            networkMode: "always",
        },
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            networkMode: "always",
        },
    },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={3000}
            action={(snackbarId) => snackbarId}
            Components={{
                error: SnackbarComponentError,
                success: SnackbarComponentSuccess,
                info: SnackbarComponentInfo,
                warning: SnackbarComponentWarning
            }}
        >
            <QueryClientProvider client={client}>
                <RouterProvider router={router}/>
            </QueryClientProvider>
        </SnackbarProvider>
    </React.StrictMode>,
)
