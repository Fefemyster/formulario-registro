interface Props {
  nombre: string; //tiene nombre independiente, evitar repetir nombre del prop
  email: string;
  password: string;
  onNombreChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorNombre?: string;
  errorEmail?: string;
  errorMensaje?: string;
}

export const Input = ({
  nombre,
  email,
  password,
  onNombreChange,
  onEmailChange,
  onPasswordChange,
  errorNombre,
  errorEmail,
  errorMensaje,
}: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <span className="text-sm font-medium text-slate-700 mb-1">Nombre:</span>
        <input
          type="text"
          value={nombre}
          onChange={onNombreChange}
          placeholder="Ingresa tu nombre"
          className="w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        ></input>
        {errorNombre && <p className="text-red-500 text-sm">{errorNombre}</p>}
        <span className="text-sm font-medium text-slate-700 mb-1">Correo:</span>
        <input
          type="text"
          value={email}
          onChange={onEmailChange}
          placeholder="Ingresa tu contraseña"
          className="w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        ></input>
        {errorEmail && <p className="text-red-500 text-sm">{errorEmail}</p>}
        <span className="text-sm font-medium text-slate-700 mb-1">
          Contraseña:
        </span>
        <input
          value={password}
          onChange={onPasswordChange}
          placeholder="Escribe aquí..."
          className="w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        />
        {errorMensaje && <p className="text-red-500 text-sm">{errorMensaje}</p>}
      </div>
    </>
  );
};
