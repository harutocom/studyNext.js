type Props<T> = {
  ButtonText: string;
  onClick: (value?: T) => void;
};

export default function Button<T>({ ButtonText, onClick }: Props<T>) {
  return (
    <button
      onClick={() => onClick()}
      className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
    >
      {ButtonText}
    </button>
  );
}
