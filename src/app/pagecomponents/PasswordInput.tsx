import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCw } from "lucide-react";

interface PasswordInputProps {
  password: string;
  onGenerate: () => void;
  onCopy: () => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  onGenerate,
  onCopy,
}) => {
  return (
    <div className="flex space-x-2">
      <Input value={password} readOnly className="flex-grow" />
      <Button onClick={onCopy} size="icon" variant="outline">
        <Copy className="h-4 w-4" />
      </Button>
      <Button onClick={onGenerate} size="icon" variant="outline">
        <RefreshCw className="h-4 w-4" />
      </Button>
    </div>
  );
};
