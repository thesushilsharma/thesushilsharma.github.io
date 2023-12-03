import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home.vue";
import Facts from "../views/Facts.vue";
import Contact from "../views/Contact.vue";
import Journal from "../views/Journal.vue";
import TechStack from "../views/TechStack.vue";
import Projects from "../views/Projects.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          title: "The Sushil Sharma | Portfolio",
        },
      },
      {
        path: "/facts",
        name: "Facts",
        component: Facts,
        meta: {
            title: "The Sushil Sharma | Facts",
          },
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: {
            title: "The Sushil Sharma | Contact",
          },
      },
      {
        path: "/journal",
        name: "Journal",
        component: Journal,
        meta: {
            title: "The Sushil Sharma | Journal",
          },
      },
      {
        path: "/techstack",
        name: "TechStack",
        component: TechStack,
        meta: {
            title: "The Sushil Sharma | Tech Stack",
          },
      },
      {
        path: "/projects",
        name: "Projects",
        component: Projects,
        meta: {
            title: "The Sushil Sharma | Projects",
          },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Get the page title from the route meta data that we have defined
  // See further down below for how we setup this data
  const title = to.meta.title;
  // If the route has a title, set it as the page title of the document/page
  if (title) {
    document.title = title;
  }
  // Continue resolving the route
  next();
});

export default router;
