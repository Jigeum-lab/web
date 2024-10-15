import { Sheet } from 'react-modal-sheet';

interface Props {
  content: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  snapPoints?: [number, number, number, number];
}

const ModalSheet = ({
  content,
  snapPoints = [-50, 0.3, 100, 0],
  isOpen,
  onClose,
}: Props) => {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      snapPoints={snapPoints}
      initialSnap={1}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          {content}
          {/* Your sheet content goes here */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
            }}
          >
            bottom
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default ModalSheet;
