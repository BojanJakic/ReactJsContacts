
export const isFirstNameValid = (inputField) => {
    var requiredErrorMessage = 'First name is required';
    var patternErrorMessage = 'Please enter between  1-30 alphabetic letters';
    var pattern = '^[a-zA-Z]{1,30}$';

    if (isFieldEmpty(inputField.value)) {
        showErrorMessage(requiredErrorMessage, inputField);
        addErrorClass(inputField);
        return false;
    } else if (isPatternViolated(pattern, inputField.value)) {
        showErrorMessage(patternErrorMessage, inputField);
        addErrorClass(inputField);
        return false;
    } else {
        removeErrorMessage("", inputField);
        addSuccessClass(inputField);
        return true;
    }
};

export const isLastNameValid = (inputField) => {
    var requiredErrorMessage = 'Last name is required';
    var patternErrorMessage = 'Please enter between  1-30 alphabetic letters';
    var pattern = '^[a-zA-Z]{1,30}$';

    if (isFieldEmpty(inputField.value)) {
        showErrorMessage(requiredErrorMessage, inputField);
        addErrorClass(inputField);
        return false;
    } else if (isPatternViolated(pattern, inputField.value)) {
        showErrorMessage(patternErrorMessage, inputField);
        addErrorClass(inputField);
        return false;
    } else {
        removeErrorMessage("", inputField);
        addSuccessClass(inputField);
        return true;
    }
};

export const isEmailValid = (inputField) => {
    var requiredErrorMessage = 'Email is required';
    var patternErrorMessage = 'Enter valid email e.g. abc@abc.abc';
    var pattern = '^\\w+[\\w\\.]*@\\w+((-\\w+)|(\\w*))\\.[a-zA-Z]{2,20}$';

    if (isFieldEmpty(inputField.value)) {
        showErrorMessage(requiredErrorMessage, inputField);
        addErrorClass(inputField);
        return false;
    } else if (isPatternViolated(pattern, inputField.value)) {
        showErrorMessage(patternErrorMessage, inputField);
        addErrorClass(inputField);
        return false;
    } else {
        removeErrorMessage("", inputField);
        addSuccessClass(inputField);
        return true;
    }
};

export const isPhoneValid = (inputField) => {
    var requiredErrorMessage = 'Phone is required';

    if (isFieldEmpty(inputField.value)) {
        showErrorMessage(requiredErrorMessage, inputField);
        addErrorClass(inputField);
        return false;
    } else {
        removeErrorMessage("", inputField);
        addSuccessClass(inputField);
        return true;
    }
};

export const isFormValid = (inputs) => {
    var firstNameValidation = isFirstNameValid(inputs[0]);
    var lastNameValidation = isLastNameValid(inputs[1]);
    var emailValidation = isEmailValid(inputs[2]);
    var phoneValidation = isPhoneValid(inputs[3]);

    if(!firstNameValidation || !lastNameValidation || !emailValidation || !phoneValidation){
        return false;
    }else {
        return true;
    }
};

const isFieldEmpty = (inputValue) => {
    return inputValue === '';
};

const isPatternViolated = (pattern, inputValue) => {
    var regex = new RegExp(pattern, 'g');
    return !regex.test(inputValue);
};

const showErrorMessage = (message, inputField) => {
    var errorMessageContainer = document.getElementById(inputField.name);
    errorMessageContainer.textContent = message;
};

const removeErrorMessage = (message, inputField) => {
    var errorMessageContainer = document.getElementById(inputField.name);
    errorMessageContainer.textContent = message;
};

const addErrorClass = (inputField) => {
    var parent = inputField.parentElement;
    parent.classList.remove('success');
    parent.classList.add('error')
};

const addSuccessClass = (inputField) => {
    var parent = inputField.parentElement;
    parent.classList.remove('error');
    parent.classList.add('success');
};