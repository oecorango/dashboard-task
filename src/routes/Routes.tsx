import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { FinalizePage } from "../pages/FinalizePage";
import { MainPage } from "../pages/MainPage";
import { ResultsPage } from "../pages/ResultsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <MainPage />,
      },
      {
        path: "/results",
        element: <ResultsPage />,
      },
      {
        path: "/finalize",
        element: <FinalizePage />,
      },
    ],
  },
]);
