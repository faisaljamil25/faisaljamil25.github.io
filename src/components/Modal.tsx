import { useRef } from 'react';
import Image from 'next/image';

interface ModalProps {
  imgSrc: string;
  setImageModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ imgSrc, setImageModal }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (e: any) => {
    // @ts-ignore
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setImageModal(false);
    }
  };

  return (
    <div className='hidden lg:block'>
      <div
        onClick={handleClickOutside}
        className='flexCenter fixed inset-0 z-10 bg-overlay-black animated fadeIn'
      >
        <div
          ref={modalRef}
          className=' dark:bg-dark-mode bg-white'
          onClick={() => setImageModal(false)}
        >
          <div className='relative' style={{ width: '58rem', height: '36rem' }}>
            <Image
              src={imgSrc}
              objectFit='cover'
              layout='fill'
              alt={`${imgSrc}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
