import { atom } from "recoil";

export const appUser = atom<any>({
	key: 'appUserAtomKey',
	default: null
})