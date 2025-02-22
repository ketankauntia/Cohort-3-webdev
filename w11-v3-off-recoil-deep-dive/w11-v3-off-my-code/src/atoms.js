import {atom, selector} from "recoil";

export const networkAtom = atom({
    key:"networkAtom",
    default: 102
})

export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
})

export const messagingAtom = atom({
    key:"messagingAtom",
    default:2
})

export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:12
})

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        const networkAtomCount = get(networkAtom);
        const messagingAtomCount = get(messagingAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);

        return networkAtomCount+messagingAtomCount+jobsAtomCount+notificationsAtomCount;
    }
})