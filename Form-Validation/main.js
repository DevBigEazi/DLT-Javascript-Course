'use strict';

const form = document.querySelector('#registrationForm');

const formValidation = () => {
    
    form.setAttribute('novalidate', '');

    form.addEventListener('submit', e => {
        e.preventDefault()
        const formValid = validateFormDetails(form)

        if (formValid){
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form)
            })
            .then((res) => res.json())
            .then(() => {
                const successMess = document.querySelector('.successMess');
                successMess.style.color = 'green';
                successMess.textContent = 'You have registered successfully';
                setTimeout(() => {
                    successMess.textContent = '';
                }, 5000);
                form.reset()
            })
            .then(() => {
                open('success.html', '__blank')
            })
        }
    })


    const formElToBlur = Array.from(form.elements)

    formElToBlur.forEach((formEl) => {
        formEl.addEventListener('blur', (event) => {
            validateSingleDetail(event.srcElement.parentElement.parentElement.parentElement);
        })
    })
    
}


formValidation();

const validateFormDetails = (formToValidate) => {
    const formDetailsEl = Array.from(formToValidate.querySelectorAll('.formDetails'))
    return formDetailsEl.every((formDetail) => validateSingleDetail(formDetail))
}

const validateOptions = [

    {
        attribute: 'minlength',
        isValid: input => input.value && input.value.length >= input.minLength,
        errorMessage: (input, label) => `${label.textContent} needs to be atleast ${input.minLength} characters`
    },

    {
        attribute: 'custommaxlength',
        isValid: input => input.value && input.value.length <= input.getAttribute('custommaxlength'),
        errorMessage: (input, label) => `${label.textContent} needs to be ${input.getAttribute('custommaxlength')} or less than ${input.getAttribute('custommaxlength')} characters`
    },

    {
        attribute: 'pattern',
        isValid: input => {
           const regex = new RegExp(input.pattern)
           return regex.test(input.value)
        },
        errorMessage: (input, label) => `${input.value} is not a valid ${label.textContent}`
    },

    {
        attribute: 'match',
        isValid: input => {
            const selectorEl = input.getAttribute('match');
            const elToMatch = form.querySelector(`#${selectorEl}`)
            return elToMatch && elToMatch.value.trim() === input.value.trim()
        },
        errorMessage: (input, label) => {
            const selectorEl = input.getAttribute('match');
            const elToMatch = form.querySelector(`#${selectorEl}`)
            const elToMatchlabel = elToMatch.parentElement.parentElement.parentElement.querySelector('label')

            return `${label.textContent} must match ${elToMatchlabel.textContent}`
        }

    },

    {
        attribute: 'required',
        isValid: input => input.value.trim() !== '',
        errorMessage: (input, label) => `${label.textContent} is required, kindly fill this field`
    },

 
]

const validateSingleDetail = (formDetail) => {
    const label = formDetail.querySelector('label');
    const input = formDetail.querySelector('input');
    const successIcon = formDetail.querySelector('.success-check');
    const errorIcon = formDetail.querySelector('.error-check');
    const errorMessEl = formDetail.querySelector('.errorMessage');

    let errorDetail = false;

    for (const options of validateOptions) {
        if (input.hasAttribute(options.attribute) && !options.isValid(input)) {
            errorMessEl.textContent = options.errorMessage(input, label)
            input.classList.remove('greenBorder');
            input.classList.add('redBorder');
            errorIcon.style.display = 'inline';
            successIcon.style.display = 'none';

            errorDetail = true;
        } 
        if (!errorDetail) {
            errorMessEl.textContent = '';
            input.classList.add('greenBorder');
            input.classList.remove('redBorder');
            successIcon.style.display = 'inline';
            errorIcon.style.display = 'none';

        }

    }

    return !errorDetail;
}

