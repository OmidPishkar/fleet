import { create } from "zustand";

interface Props {
    activeContent : string;
    setActiveContent : (val : string) => void;
}

const useLandingContent = create<Props>(set => ({
    activeContent : "Homes",
    setActiveContent : (val : string) => set({activeContent : val})
}));

export default useLandingContent;