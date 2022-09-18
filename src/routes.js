import Home from "./pages/home/home";
import PlayerList from "./pages/player/player-list";
import CalendarList from "./pages/calendar/calendar-list";
import Rating from "./pages/rating/rating";
import TeamList from "./pages/team/team-list";
import NotFound from "./pages/errors/not-found";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import TeamToAdd from "./pages/team/team-list-admin/team-to-add";
import TeamToUpdate from "./pages/team/team-list-admin/team-to-update";


export const routes = [
    {
        path:'',
        element: <Home />
    },
    {
        path:'home',
        element: <Home />
    },
    {
        path:'user',
        element: <PlayerList />
    },
    {
        path:'calendar',
        element: <CalendarList />
    },
    {
        path:'rating',
        element: <Rating />
    },
    {
        path:'team',
        element: <TeamList />
    },
    {
        path:'teamToAdd',
        element: <TeamToAdd />
    },
    {
        path:'teamToUpdate',
        element: <TeamToUpdate />
    },
    {
        path:'login',
        element: <Login />
    },
    {
        path:'register',
        element: <Register />
    },
    {
        path:'*',
        element: <NotFound />
    }
];

