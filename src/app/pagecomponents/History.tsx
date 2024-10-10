import { Button } from "@/components/ui/button";

interface HistoryProps {
  history: string[];
  onClearHistory: () => void;
}

export const History: React.FC<HistoryProps> = ({
  history,
  onClearHistory,
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Histórico de Senhas</h3>
      <ul className="space-y-2">
        {history.map((item, index) => (
          <li key={index} className="text-sm bg-gray-100 p-2 rounded">
            {item}
          </li>
        ))}
      </ul>
      {history.length > 0 && (
        <Button className="mt-4 w-full" onClick={onClearHistory}>
          Limpar Histórico
        </Button>
      )}
    </div>
  );
};
