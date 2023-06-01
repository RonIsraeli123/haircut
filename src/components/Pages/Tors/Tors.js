import React from 'react';

import TorView from './TorView';

const userTors = [{ date: { day: 'ראשון', hour: '14:30' }, jobType: 'hair' }];
const UserTor = () => {
  return (
    <div>
      {userTors.map(() => {
        <TorView />;
      })}
    </div>
  );
};
export default UserTor;
