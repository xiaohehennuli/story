import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../components/home"),
    children: [
      {
        path: "/",
        name: "login",
        component: () => import("../components/login"),
      },
      {
        path: "/sort",
        name: "sort",
        component: () => import("../components/sort"),
      },
      {
        path: "/love",
        name: "love",
        component: () => import("../components/love"),
      },
      {
        path: "/travel",
        name: "travel",
        component: () => import("../components/travel"),
      },
      {
        path: "/line",
        name: "line",
        component: () => import("../components/line"),
      },
      {
        path: "/email",
        name: "/email",
        component: () => import("../components/index"),
      },
    ],
  },
  {
    path: "/admin",
    redirect: "/welcome",
    meta: { requiresAuth: true },
    component: () => import("../components/admin/admin"),
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () => import("../components/admin/welcome"),
      },
      {
        path: "/main",
        name: "main",
        component: () => import("../components/admin/main"),
      },
      {
        path: "/webEdit",
        name: "webEdit",
        component: () => import("../components/admin/webEdit"),
      },
      {
        path: "/userList",
        name: "userList",
        component: () => import("../components/admin/userList"),
      },
      {
        path: "/postList",
        name: "postList",
        component: () => import("../components/admin/postList"),
      },
      {
        path: "/postEdit",
        name: "postEdit",
        component: () => import("../components/admin/postEdit"),
      },
      {
        path: "/sortList",
        name: "sortList",
        component: () => import("../components/admin/sortList"),
      },
      {
        path: "/configList",
        name: "configList",
        component: () => import("../components/admin/configList"),
      },
      {
        path: "/commentList",
        name: "commentList",
        component: () => import("../components/admin/commentList"),
      },
      {
        path: "/treeHoleList",
        name: "treeHoleList",
        component: () => import("../components/admin/treeHoleList"),
      },
      {
        path: "/resourceList",
        name: "resourceList",
        component: () => import("../components/admin/resourceList"),
      },
      {
        path: "/loveList",
        name: "loveList",
        component: () => import("../components/admin/loveList"),
      },
      {
        path: "/resourcePathList",
        name: "resourcePathList",
        component: () => import("../components/admin/resourcePathList"),
      },
    ],
  },
  {
    path: "/verify",
    name: "verify",
    component: () => import("../components/admin/verify"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!Boolean(localStorage.getItem("adminToken"))) {
      next({
        path: "/verify",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
