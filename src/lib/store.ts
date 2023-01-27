import { writable } from 'svelte/store'
  
import { required, 
  mustMatch, 
  minNumOptions, 
  maxNumOptions, 
  verifyEmail, 
  isNumber, 
  isDate,
  isInRange,
  isPhoneNumberNA,
  isAlpha,
  isURL,
  isJSON,
  isCreditCard,
  isAlphaNumeric,
  isStrongPassword,
  isTime,
  isBase64,
 } from './validators'
import type { formStoreType, formStoreValueType } from './types'

const initStoreValues:formStoreValueType = {
  values: {},
  errors: {}
}

function createFormStore() : formStoreType {
  const { subscribe, set, update } = writable(initStoreValues)
    
  return {
    subscribe,
    set,
    update,
    required: (field) => update(store => required(field, store)),
    mustMatch: (field, fieldToMatch) => update(store => mustMatch(field, fieldToMatch, store)),
    minNumOptions: (field, min) => update(store => minNumOptions(field, min, store)),
    maxNumOptions: (field, max) => update(store => maxNumOptions(field, max, store)),
    customValidator: (func) => update(store => func(store)),
    verifyEmail: (field) => update(store=>verifyEmail(field, store)),
    isNumber: (field) => update(store=>isNumber(field, store)),
    isDate: (field) => update(store=>isDate(field, store)),
    isInRange: (field, min, max) => update(store=>isInRange(field, min, max, store)),
    isPhoneNumberNA: (field) => update(store=>isPhoneNumberNA(field, store)),
    isAlpha: (field) => update(store=>isAlpha(field, store)),
    isURL: (field) => update(store=>isURL(field, store)),
  }
}
  
export const formStore = createFormStore()
  