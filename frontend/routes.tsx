import { protectRoutes } from '@hilla/react-auth';

import AplicacionesUsuarioView from './views/aplicacion/AplicacionesUsuarioView';
import OrganismoView from './views/organismo/OrganismoView';
import AplicacionView from './views/aplicacion/AplicacionView';
import LoginView from 'Frontend/views/login/LoginView.js';
import MainLayout from 'Frontend/views/MainLayout.js';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import PerfilView from './views/perfil/PerfilView';
import AsignarAplicacionesView from './views/aplicacion/AsignacionView';


const AboutView = lazy(async () => import('Frontend/views/about/AboutView.js'));




export const routes = protectRoutes([
  {
    element: <MainLayout />,
    handle: { title: 'Main' },
    children: [
      {
        path: '/',
        element: <AboutView />,
        handle: { title: 'Administración de Usuarios', requiresLogin: true }
      },
      {
        path: '/organismo',
        element: <OrganismoView />,
        handle: { title: 'Administración de Organismos', requiresLogin: true }
      },
      {
        path: '/perfiles',
        element: <PerfilView />,
        handle: { title: 'Administración de Organismos', requiresLogin: true }
      },
      {
        path: '/aplicacion',
        element: <AplicacionView />,
        handle: { title: 'Administración de Aplicaciones', requiresLogin: true }
      },
      {
        path: '/about',
        element: <AboutView />,
        handle: { title: 'Administración de Aplicaciones', requiresLogin: true }
      },
      {
        path: '/misapps',
        element: <AplicacionesUsuarioView/>,
        handle: { title: 'Administración de Aplicaciones', requiresLogin: true }
      },


    ],
  },
  { path: '/login', element: <LoginView /> },
]) as RouteObject[];

export default createBrowserRouter(routes);
