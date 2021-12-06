import Modal from 'react-modal'
import { SelectedCard } from '../../pages'
import { GrClose } from 'react-icons/gr'

type ModalProps = {
  isOpen: boolean
  selectedCards: SelectedCard
  handleModalClose: () => void
}

const customStyles = {
  content: {
    maxWidth: '450px',
    minWidth: '300px',
    top: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: 'auto',
    right: 'auto',
    paddingTop: '30px',
  },
}

const SubmitModal = ({ isOpen, handleModalClose, selectedCards }: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button
        onClick={handleModalClose}
        className="absolute right-5 top-5 cursor-pointer"
      >
        <GrClose />
      </button>
      <h2 className="text-center text-3xl uppercase font-semibold mb-4">Success</h2>
      {selectedCards &&
        Object.keys(selectedCards).map((categoryId: string) => (
          <div className="mb-3" key={categoryId}>
            <h3 className="text-2xl capitalize mb-2">{categoryId}:</h3>
            <p className="pl-10">{selectedCards[categoryId].title}</p>
          </div>
        ))}
    </Modal>
  )
}

export default SubmitModal
