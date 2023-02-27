import { FormValues } from 'interfaces/property';

export const validationForm = (formvalues: FormValues) => {
    const errors: { message: string } = { message: ''};
    let hasError = false;

    Object.keys(formvalues).forEach((key) => {
        switch(key) {
            case 'title':
                if(!formvalues.title){
                    errors.message = 'Title is requrired';
                    hasError = true;
                }
                break;
                
                case 'description':
                    if(!formvalues.description) {
                        errors.message = 'Description is required';
                        hasError = true;
                    }
                    break;

                case 'location':
                    if(!formvalues.location) {
                        errors.message = " Location is required";
                        hasError = true;
                    }
                    break;
                
                case 'price':
                if (!formvalues.price) {
                    errors.message = "Price is required"
                    hasError = true;
                }
                break;
            default:
                hasError = false;

        }
    });
    return { hasError, errors}
};
export const hasChanged = (initialValues: FormValues, currentValues: FormValues) => {
    const initialValuesArray = Object.values(initialValues);
    const currentValuesArray = Object.values(currentValues);
   for (let i = 0; i < initialValuesArray.length; i++){
    if(initialValuesArray[i] !== currentValuesArray[i]){
        return true;
    }
   }
   return false;
};