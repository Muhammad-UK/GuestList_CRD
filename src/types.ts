export type TGuestsData = {
    id: number,
    name: string,
    email: string,
    phone: string
}
export type TGuestsProps = {
    guests: TGuestsData[];
    destroyGuest: (guest: TGuestsData)=> void;
}
export type TCreateGuestProp = {
    createGuest: (guest: TGuest) => void;
}
export type TGuest = {
    name: string,
    email: string,
    phone: string
}