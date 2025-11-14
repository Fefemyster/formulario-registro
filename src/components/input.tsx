interface Props {
  usuario: string; //tiene nombre independiente, evitar repetir nombre del prop
  email: string;
  password: string;
  onUserChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorUser?: string;
  errorEmail?: string;
  errorPassword?: string;
}

export const Input = ({
  usuario,
  email,
  password,
  onUserChange,
  onEmailChange,
  onPasswordChange,
  errorUser,
  errorEmail,
  errorPassword,
}: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <span className="text-sm font-medium text-slate-700 mb-1">
          Usuario:
        </span>
        <input
          type="text"
          value={usuario}
          onChange={onUserChange}
          placeholder="Ingresa tu usuario"
          className="w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        ></input>
        {errorUser && <p className="text-red-500 text-sm">{errorUser}</p>}
        <span className="text-sm font-medium text-slate-700 mb-1">Correo:</span>
        <input
          type="text"
          value={email}
          onChange={onEmailChange}
          placeholder="Ingresa tu correo"
          className="w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        ></input>
        {errorEmail && <p className="text-red-500 text-sm">{errorEmail}</p>}
        <span className="text-sm font-medium text-slate-700 mb-1">
          Contraseña:
        </span>
        <input
          value={password}
          onChange={onPasswordChange}
          placeholder="Ingresa tu contraseña"
          className="w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        />
        {errorPassword && (
          <p className="text-red-500 text-sm">{errorPassword}</p>
        )}
      </div>
    </>
  );
};
