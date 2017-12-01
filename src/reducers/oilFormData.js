const initialState = {
    name: '',
    description: '',
    uses: '',
    fragrance_profile: '',
    medical_properties: ''
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'UPDATED_DATA':
            return action.oilFormData
        case 'RESET_OIL_FORM':
            return state;
        
        default:
            return state;
    }
}