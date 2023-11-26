import { create } from 'zustand';


const useGuidelinesModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useGuidelinesModal;