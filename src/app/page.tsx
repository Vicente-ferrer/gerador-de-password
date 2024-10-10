"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { PasswordInput } from "./pagecomponents/PasswordInput";
import { PasswordStrength } from "./pagecomponents/PasswordStrength";
import { Settings } from "./pagecomponents/Settings";
import { History } from "./pagecomponents/History";
import {
  generatePassword,
  checkPasswordStrength,
} from "./pagecomponents/passwordUtils";

export default function PasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(12);
  const [useUppercase, setUseUppercase] = useState<boolean>(true);
  const [useLowercase, setUseLowercase] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const [history, setHistory] = useState<string[]>([]);
  const { toast } = useToast();

  const generateNewPassword = () => {
    const options = { useUppercase, useLowercase, useNumbers, useSymbols };
    const newPassword = generatePassword(length, options);
    setPassword(newPassword);
    setHistory([newPassword, ...history].slice(0, 5)); // Mantém as últimas 5 senhas
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast({
      title: "Senha copiada!",
      description: "A senha foi copiada para a área de transferência.",
    });
  };

  const clearHistory = () => setHistory([]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Gerador de Senhas
        </h2>
        <PasswordInput
          password={password}
          onGenerate={generateNewPassword}
          onCopy={copyToClipboard}
        />
        <PasswordStrength strength={checkPasswordStrength(password)} />
        <Settings
          length={length}
          setLength={setLength}
          options={{ useUppercase, useLowercase, useNumbers, useSymbols }}
          setOption={(option) => {
            switch (option) {
              case "useUppercase":
                setUseUppercase(!useUppercase);
                break;
              case "useLowercase":
                setUseLowercase(!useLowercase);
                break;
              case "useNumbers":
                setUseNumbers(!useNumbers);
                break;
              case "useSymbols":
                setUseSymbols(!useSymbols);
                break;
            }
          }}
        />
        <History history={history} onClearHistory={clearHistory} />
      </div>
    </div>
  );
}
