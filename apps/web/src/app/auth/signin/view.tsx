'use client';
import { Button } from '@repo/ui';
import { signIn, signOut } from 'next-auth/react';

import styles from './styles/index.module.scss';

import { useMainCharacterViewModel } from '@/app/auth/signin/hooks';
import { useClientSession } from '@/utils/session/useClientSession';

const ViewComponent = () => {
  useMainCharacterViewModel();
  const { session } = useClientSession();

  return (
    <div>
      <h1>Sign In</h1>
      <button
        className={styles.button}
        onClick={() =>
          signIn('email-password-credentials', {
            email: '123',
            password: '123',
          })
        }
      >
        Sign In
      </button>
      <Button className={styles.button} onClick={() => signOut()}>
        Logout
      </Button>
      <div>{JSON.stringify(session?.user)}</div>
    </div>
  );
};

export default ViewComponent;
