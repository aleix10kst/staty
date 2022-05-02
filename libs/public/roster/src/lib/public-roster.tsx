import { useEffect, useState } from 'react';
import PlayerCard from './player-card/player-card';
import { Player } from './types/player.type';

/* eslint-disable-next-line */
export interface PublicRosterProps {}

export function PublicRoster(props: PublicRosterProps) {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch('/assets/players.json');
      const playersFromResponse = await response.json();
      setPlayers(playersFromResponse);
    };
    fetchPlayers();
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl text-gray-700 font-bold">Jugadores</h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map(
          (
            { name, lastName, imageUrl, number, nationality, position },
            idx
          ) => (
            <PlayerCard
              key={idx}
              name={name}
              lastName={lastName}
              imageUrl={imageUrl}
              number={number}
              nationality={nationality}
              position={position}
            />
          )
        )}
      </div>
    </div>
  );
}

export default PublicRoster;
