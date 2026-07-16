import { useEffect, useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState<Array<{ id: number; message: string }>>([]);

  const toast = (message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 3000);
  };

  return { toast, toasts };
}
