import React, { lazy, Suspense, Fragment } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import LoadingScreen from "./components/LoadingScreen";

const routesConfig = [
  {
    exact: true,
    path: "/",
    component: () => <Redirect to="/login" />,
  },
  {
    exact: true,
    path: "/login",
    component: lazy(() => import("./views/LoginView")),
  },
  {
    exact: true,
    layout: DashboardLayout,
    path: ["/chat/new", "/chat/:threadKey"],
    component: lazy(() => import("./views/ChatView")),
  },
  {
    exact: true,
    layout: DashboardLayout,
    path: "/chat",
    component: () => <Redirect to="/chat/new" />,
  },
  {
    exact: true,
    path: "/profile-edit",
    layout: DashboardLayout,
    component: lazy(() => import("./views/ProfileView")),
  },
  {
    exact: true,
    path: "/product-information",
    // layout: DashboardLayout,
    component: lazy(() => import("./views/ProductInformation")),
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("./views/Error404View")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];

const renderRoutes = (routes) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Component = route.component;
          const Layout = route.layout || Fragment;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
