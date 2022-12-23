import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

export function Portal({children}) {
  const [mounted, setMounted] = useState(false);

  useEffect(()=> { setMounted(true) }, []);

  return mounted ?
    ReactDOM.createPortal(
      children,
      document.getElementById("portal")
    ) : null
}
