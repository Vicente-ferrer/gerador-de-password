import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface Options {
  useUppercase: boolean;
  useLowercase: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
}

interface SettingsProps {
  length: number;
  setLength: (length: number) => void;
  options: Options;
  setOption: (option: keyof Options) => void;
}

export const Settings: React.FC<SettingsProps> = ({
  length,
  setLength,
  options,
  setOption,
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Comprimento da senha: {length}</Label>
        <Slider
          value={[length]}
          onValueChange={(value) => setLength(value[0])}
          min={6}
          max={30}
          step={1}
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="uppercase">Letras maiúsculas</Label>
          <Switch
            id="uppercase"
            checked={options.useUppercase}
            onCheckedChange={() => setOption("useUppercase")}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="lowercase">Letras minúsculas</Label>
          <Switch
            id="lowercase"
            checked={options.useLowercase}
            onCheckedChange={() => setOption("useLowercase")}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="numbers">Números</Label>
          <Switch
            id="numbers"
            checked={options.useNumbers}
            onCheckedChange={() => setOption("useNumbers")}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="symbols">Símbolos</Label>
          <Switch
            id="symbols"
            checked={options.useSymbols}
            onCheckedChange={() => setOption("useSymbols")}
          />
        </div>
      </div>
    </div>
  );
};
