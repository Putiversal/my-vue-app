import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TaskManagerView from "../views/TaskManagerView.vue";
import GamesView from "../views/GamesView.vue";
import SnakeGame from "../views/gameView/SnakeGame.vue"; // Assuming you have a SnakeGame component

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    component: AboutView,
  },
  {
    path: "/task-manager",
    name: "taskManager",
    component: TaskManagerView,
  },
  {
    path: "/games",
    name: "games",
    component: GamesView,
    children: [
      {
        path: "snake-game",
        name: "SnakeGame",
        component: SnakeGame,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
