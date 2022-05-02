import { Player } from '../types/player.type';

/* eslint-disable-next-line */
export interface PlayerCardProps {}

type PropsFromPlayer = Pick<
  Player,
  'name' | 'lastName' | 'imageUrl' | 'number' | 'position' | 'nationality'
>;

interface PlayerFactProps {
  label: string;
  text: string | number;
}

const PlayerFact = ({ label, text }: PlayerFactProps) => {
  return (
    <div>
      <p className="text-gray-600 text-sm font-light">{label}</p>
      <h2 className="font-bold text-lg">{text}</h2>
    </div>
  );
};

export function PlayerCard({
  name,
  lastName,
  imageUrl,
  number,
  nationality,
  position,
}: PlayerCardProps & PropsFromPlayer) {
  return (
    <div className="flex flex-col border border-gray-200 rounded-md shadow py-3 px-8 space-y-3 bg-gray-50">
      <img
        src={imageUrl}
        alt={`${name} ${lastName}`}
        className="h-36 rounded-full self-center"
      />
      <div className="grid grid-cols-2 gap-2">
        <PlayerFact label={'Nom'} text={`${name}`} />
        <PlayerFact label={'Cognom'} text={`${lastName}`} />
        <PlayerFact label={'Nacionalitat'} text={nationality} />
        <PlayerFact label={'Dorsal'} text={number} />
        <PlayerFact label={'Posició'} text={position} />
      </div>
    </div>
  );
}

export default PlayerCard;
