/* eslint-disable import/prefer-default-export */
export const collectIdsAndDocs = doc => ({ id: doc.id, ...doc.data() })
