import { FC, FormEvent, useState } from "react"
type Position = 'Top Left' | 'Top Right' | 'Bottom Left' | 'Bottom Right';
type ToastConfiguration = {
  title: string,
  position: Position,
  icon: string
}
type Toast = { id: number } & ToastConfiguration;

const ToastForm: FC<{
  onSubmit: (newToast: ToastConfiguration) => void
}> = ({ onSubmit }) => {
  const [title, setTitle] = useState('My Title');
  const [position, setPosition] = useState<Position>('Top Left');
  const [icon, setIcon] = useState('A');
  const resetForm = () => {
    setTitle('');
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log(e.target);
    onSubmit({ title, position, icon });
    resetForm();
  }
  return (
      <form onSubmit={handleSubmit}>
        <p className="text-center">Configurations</p>
        <div className="flex flex-col border-gray-300 border p-2 rounded mt-3">
          <label
            className="text-gray-500 font-semibold"
            htmlFor="toast-title"
          >
              Toast Title
          </label>
          <input
            type="text"
            id="toast-title"
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
            className="bg-gray-200 rounded px-1 py-0.5 w-96"
          />

          <label
            className="text-gray-500 font-semibold"
            htmlFor="toast-position"
          >
            Position
          </label>
          <select
            id="toast-position"
            className="bg-gray-200 rounded px-1 py-0.5"
            value={position}
            onChange={e => setPosition(e.target.value as Position)}
          >
            <option value="Top Left">Top Left</option>
            <option value="Top Right">Top Right</option>
            <option value="Bottom Left">Bottom Left</option>
            <option value="Bottom Right">Bottom Right</option>
          </select>

          <label
            htmlFor="toast-position"
            className="text-gray-500 font-semibold"
          >
            Icon
          </label>
          <select
            id="toast-icon"
            className="bg-gray-200 rounded px-1 py-0.5"
            value={icon}
            onChange={e => setIcon(e.target.value)}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-600 transition-all text-white p-3 rounded-xl text-sm shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
          >
            Show Toast
          </button>
        </div>
      </form>
  )
}

const Toasts = () => {
  return (
    <div className=""></div>
  )
}

export const App = () => {
  const [toasts, setToasts] = useState<Toast[]>([])
  console.log(toasts);
  const queueNewToast = (newToast: ToastConfiguration) => {
    setToasts([
      { ...newToast, id: Math.random() * 1000000 },
      ...toasts
    ]);
  };

  const dequeueToast = () => {
    if (toasts.length < 1) return null;
    const dequeuedToast = toasts[0];
    setToasts(toasts.slice(1));
    return dequeuedToast;
  };
  
  const removeToast = (id: number) => {
    const index = toasts.findIndex(t => t.id === id);
    if (index !== -1) {
      setToasts([
        ...toasts.slice(0, index),
        ...toasts.slice(index + 1)
      ]);
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Toasts />
      <ToastForm onSubmit={queueNewToast} />
    </div>
  )
}
