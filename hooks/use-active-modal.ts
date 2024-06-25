import {create} from "zustand";

interface Props {
    activeModal : string;
    setActiveModal : (val : string) => void;
};

const useActiveModal = create<Props>(set => ({
    activeModal : "",
    setActiveModal : (val : string) => set({activeModal : val})
}));

export default useActiveModal;