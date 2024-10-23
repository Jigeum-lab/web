'use client';
import { Button } from '@repo/ui';
import { signOut } from 'next-auth/react';

const MyPageView = () => {
  return (
    <div>
      <h2>Mypage</h2>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        SignOut
      </Button>
    </div>
  );
};

export default MyPageView;
