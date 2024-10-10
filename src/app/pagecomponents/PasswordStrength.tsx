interface PasswordStrengthProps {
  strength: number;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({
  strength,
}) => {
  const strengthLabel = ["Fraca", "Média", "Forte", "Muito Forte"];
  const strengthColor = ["red", "orange", "yellow", "green"];

  return (
    <div className="mt-2">
      <p>
        Força da senha:{" "}
        <span style={{ color: strengthColor[strength] }}>
          {strengthLabel[strength]}
        </span>
      </p>
    </div>
  );
};
