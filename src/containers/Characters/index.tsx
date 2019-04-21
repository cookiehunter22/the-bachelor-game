import React, { FC } from 'react';

import CharacterCard from '../../components/CharacterCard';
import { User } from '../../models';

interface Props {
  users: User[];
}

const Characters: FC<Props> = ({users}) => {
  return (
    <div>
      {users.map(user => <CharacterCard key={user.id} character={ user.character! } playerName={user.username} />)}
    </div>
  )
}

export default Characters
