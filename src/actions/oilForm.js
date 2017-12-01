export const updateOilFormData = oilFormData => {
    return {
        type: 'UPDATED_DATA',
        oilFormData
    }
}

export const resetOilForm = () => {
    return {
        type: 'RESET_OIL_FORM'
    }
}