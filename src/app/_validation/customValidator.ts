export class CustomValidator {
    
    // Validates user phone numbers
    static phoneValidator(number): boolean {
        if(number.value.length != 10){
            return false;
        }
        const PHONE_REGEXP = /^[0-9]{10,10}$/;
        if (PHONE_REGEXP.test(number.value)) {
            return false;
        }
        return true
    }
    
}