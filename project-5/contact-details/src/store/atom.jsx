import {atom} from 'recoil';

export const addContact = atom({
    key : 'addContact',
    default : false

})
export const uppContact = atom({
    key : 'uppContact',
    default : false

})

export const nameValue = atom({
    key : 'nameValue',
    default : ""

})
export const emailValue = atom({
    key : 'emailValue',
    default : ""

})
export const AllContacts = atom({
    key : 'AllContacts',
    default : []

})
export const setUpdateId = atom({
    key:"setUpdateId",
    default:""
})

export const searchContact = atom({
    key : 'searchContact',
    default : []
})

