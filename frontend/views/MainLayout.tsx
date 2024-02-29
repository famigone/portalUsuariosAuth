import { AppLayout } from '@hilla/react-components/AppLayout.js';
import { Avatar } from '@hilla/react-components/Avatar.js';
import { Button } from '@hilla/react-components/Button.js';
import { DrawerToggle } from '@hilla/react-components/DrawerToggle.js';
import Placeholder from 'Frontend/components/placeholder/Placeholder.js';
import Role from 'Frontend/generated/com/example/application/data/Role';
import { useAuth } from 'Frontend/util/auth.js';
import { useRouteMetadata } from 'Frontend/util/routing.js';
import { Suspense, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navLinkClasses = ({ isActive }: any) => {
  return `block rounded-m p-s ${isActive ? 'bg-primary-10 text-primary' : 'text-body'}`;
};

export default function MainLayout() {
  const currentTitle = useRouteMetadata()?.title ?? 'PORTAL';
  useEffect(() => {
    document.title = currentTitle;
  }, [currentTitle]);

  const { state, logout } = useAuth();
  const profilePictureUrl = null;
  const hasRole = (role: Role) => state.user && state.user.roles && state.user.roles.includes(role);
  //console.log("ROOOOOOOOOOL "+hasRole(Role.ADMIN))
  return (
    <AppLayout primarySection="drawer">
      <div slot="drawer" className="flex flex-col justify-between h-full p-m">
        <header className="flex flex-col gap-m">
          <h1 className="text-l m-0">PORTAL DE USUARIOS</h1>
          <nav>
          {(state.user && hasRole(Role.ADMIN)  ) ? (
              <NavLink className={navLinkClasses} to="/">
                Usuari@s
              </NavLink>
            ) : null}
            {(state.user && hasRole(Role.ADMIN)  )  ? (
              <NavLink className={navLinkClasses} to="/aplicacion">
                Aplicaciones
              </NavLink>
            ) : null}
            {(state.user && hasRole(Role.ADMIN)  ) ? (
              <NavLink className={navLinkClasses} to="/organismo">
                Organismos
              </NavLink>
            ) : null}
            {(state.user && hasRole(Role.USER) && !hasRole(Role.ADMIN) )? (
              <NavLink className={navLinkClasses} to="/misapps">
                Mis Apps
              </NavLink>
            ) : null}   

          </nav>
        </header>
        <footer className="flex flex-col gap-s">
          {state.user ? (
            <>
              <div className="flex items-center gap-s">
                <Avatar theme="xsmall" img={profilePictureUrl} name={state.user.name} />
                {state.user.name}
              </div>
              <Button onClick={async () => logout()}>Sign out</Button>
            </>
          ) : (
            <a href="/login">Sign in</a>
          )}
        </footer>
      </div>

      <DrawerToggle slot="navbar" aria-label="Menu toggle"></DrawerToggle>
      <h2 slot="navbar" className="text-l m-0">
        {currentTitle}
      </h2>

      <Suspense fallback={<Placeholder />}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
}
