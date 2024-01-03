import { create } from 'zustand';


const useAcceptMeetingModal = create((set) => ({
  isOpen: false,
  meetingId: null,
  actionTakenOnMeetingId: null,
  actionTakenOnMeeting: (id) => set({ actionTakenOnMeetingId: id }),
  onOpen: (id) => set({ isOpen: true, meetingId: id }),
  onClose: () => set({ isOpen: false })
}));


export default useAcceptMeetingModal;