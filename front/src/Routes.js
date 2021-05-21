import React, { lazy, Suspense, Fragment } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import DashboardGuard from "components/DashboardGuard";
import DashboardLayout from "layouts/MainLayout";
import { Modal } from "@redq/reuse-modal";

const routesConfig = [
  {
    exact: true,
    path: "/",
    component: () => <Redirect to="/landing/1" />,
  },
  {
    exact: true,
    path: "/landing/:page",
    component: lazy(() => import("./views/LandingView")),
  },
  {
    exact: true,
    path: "/flowers/:page",
    component: lazy(() => import("./views/FlowersView")),
  },
  {
    exact: true,
    path: "/bouquets/:page",
    component: lazy(() => import("./views/BouquetsView")),
  },
  {
    exact: true,
    path: "/product-information/:id",
    component: lazy(() => import("./views/ProductInformation")),
  },

  {
    exact: true,
    path: "/profile-edit",
    component: lazy(() => import("./views/ProfileView")),
  },

  {
    exact: true,
    path: "/404",
    component: lazy(() => import("./views/Error404View")),
  },

  {
    exact: true,
    path: "/checkout",
    component: lazy(() => import("./views/CheckoutView")),
  },

  {
    exact: true,
    path: "/order/:password",
    component: lazy(() => import("./views/OrderSuccessView")),
  },

  {
    exact: true,
    path: "/orders",
    component: lazy(() => import("./views/UserOrdersView")),
  },

  {
    path: "/admin",
    guard: DashboardGuard,
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: "/admin",
        component: () => <Redirect to="/admin/dashboard/1" />,
      },
      {
        exact: true,
        path: "/admin/dashboard/:page",
        component: lazy(() => import("views/admin/ProductsView")),
      },
      {
        exact: true,
        path: "/admin/create-product",
        component: lazy(() => import("views/admin/CreateProductView")),
      },
      {
        exact: true,
        path: "/admin/create-coupon",
        component: lazy(() => import("views/admin/CreateCouponView")),
      },
      {
        exact: true,
        path: "/admin/manage-users",
        component: lazy(() => import("views/admin/ManageUsersView")),
      },

      {
        exact: true,
        path: "/admin/orders",
        component: lazy(() => import("./views/admin/OrdersView")),
      },

      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },

  {
    component: () => <Redirect to="/404" />,
  },
];

const renderRoutes = (routes, deviceType) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Guard = route.guard || Fragment;
          const Component = route.component;
          const Layout = route.layout || Fragment;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Modal>
                        <Component {...props} deviceType={deviceType} />
                      </Modal>
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

function Routes(props) {
  return renderRoutes(routesConfig, props.deviceType);
}

export default Routes;
