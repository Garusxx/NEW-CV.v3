import { useState, useEffect } from "react";

export default function DelayedRender({ children, delay = 500 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return show ? children : null;
}

