import { createPortal } from "react-dom";
import { useRef, useImperativeHandle, forwardRef } from "react";
import Button from "./Button";
const Modal = forwardRef(function Modal({ children }, ref) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      show() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form
        method="dialog"
        className="mt-4 text-right text-stone-500 hover:text-stone-400"
      >
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
