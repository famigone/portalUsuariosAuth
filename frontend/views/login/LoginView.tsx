import { LoginI18n, LoginOverlay, LoginOverlayElement } from '@hilla/react-components/LoginOverlay.js';
import Role from 'Frontend/generated/com/example/application/data/Role';
import { useAuth } from 'Frontend/util/auth.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const loginI18n: LoginI18n = {
  ...new LoginOverlayElement().i18n,
  header: { title: 'Portal de Usuarios', description: 'admin/admin' },
};

export default function LoginView() {
  const { login } = useAuth();
  const [hasError, setError] = useState<boolean>();
  const navigate = useNavigate();
  const { state } = useAuth();
  const hasRole = (role: Role) => state.user && state.user.roles && state.user.roles.includes(role);
  return (
    <LoginOverlay
      opened
      error={hasError}
      noForgotPassword
      i18n={loginI18n}
      onLogin={async ({ detail: { username, password } }) => {
        const { defaultUrl, error, redirectUrl } = await login(username, password);
        console.log("defaultUrl "+defaultUrl)
        console.log("redirectUrl "+redirectUrl)
        if (error) {
          setError(true);
        } else {
          let url = redirectUrl ?? defaultUrl ?? '/';
          const path = new URL(url, document.baseURI).pathname;
          navigate(path);
          /*if (!hasRole(Role.ADMIN)) {
            navigate('/about');
          } else {
            navigate(path);
          }*/
        }
      }}
    />
  );
}
