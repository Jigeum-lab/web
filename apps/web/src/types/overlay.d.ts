type CreateOverlayElement = (props: {
  isOpen: boolean;
  close: () => void;
  exit: () => void;
}) => JSX.Element;

export interface Overlay {
  open: (overlayElement: CreateOverlayElement) => void;
  close: () => void;
  exit: () => void;
}
