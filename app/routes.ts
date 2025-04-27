import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

// layout and routes consuming it - path, file
export default [
  layout("routes/admin/admin-layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("all-users", "routes/admin/all-users.tsx"),
  ]),
] satisfies RouteConfig;
