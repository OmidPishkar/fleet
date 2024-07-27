import { create } from "zustand";

interface Props {
    activePropertyForm : string;
    setActivePropertyForm : (val : string) => void;
};


const useActivePropertyForm = create<Props>(set => ({
    activePropertyForm : "home",
    setActivePropertyForm : (val : string) => set({activePropertyForm : val})
}));

export default useActivePropertyForm;