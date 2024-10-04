import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { ErrorPage } from './error.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PostPage } from './posts/index.tsx'


const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    
  },
  {
    path: '/posts/:postId',
    element: <PostPage />,
  },
]
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
