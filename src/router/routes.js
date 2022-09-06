const routes = [
  {
    path: "/admin/main",
    component: () => import("src/pages/admin/applications/Applications.vue"),
  },
  // {
  //   path: "admin",
  //   children: [
  //     {
  //       path: "/main",
  //       name: "admin-main",
  //       component: () => import("pages/admin/Applications.vue"),
  //     },
  //   ],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
