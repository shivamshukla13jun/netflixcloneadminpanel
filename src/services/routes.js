import Home from "../pages/home/Home";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import NewUser from "../pages/newUser/NewUser";
import Login from "../pages/login/Login";
import ListList from "../pages/listList/ListList";
import List from "../pages/list/List";
import NewList from "../pages/newList/NewList";
import MovieList from "../pages/movieList/MovieList";
import Movie from "../pages/movie/Movie";
import NewMovie from "../pages/newMovie/NewMovie";

export const routes = [
    {
      path: '/',
      exact: true,
      component: Home,
    },
    {
      path: '/login',
      exact: true,
      component: Login,
    },
    {
      path: '/users',
      exact: true,
      component: UserList,
    },
    {
      path: '/user/:userId',
      exact: true,
      component: User,
    },
    {
      path: 'newUser',
      exact: true,
      component: NewUser,
    },
    {
      path: '/movies',
      exact: true,
      component: MovieList,
    },
    {
      path: '/movie/:movieId',
      exact: true,
      component: Movie,
    },
    {
      path: '/newMovie',
      exact: true,
      component: NewMovie,
    },
    {
      path: '/lists',
      exact: true,
      component: ListList,
    },
    {
      path: '/list/:listId',
      exact: true,
      component: List,
    },
    {
      path: '/newList',
      exact: true,
      component: NewList,
    },
  ];
 