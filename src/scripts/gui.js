import {generateTag} from "./helpers.js";
import currencyCodes from "./constants.js";

function generateForm() {
    const fragment = document.createDocumentFragment();

    const labelAmountRef = generateTag({
        tagName: 'label',
        tagClass: 'lbl',
        tagAttrs: [{type: 'for', value: 'amount'}],
        tagText: 'Amount:'
    });
    fragment.appendChild(labelAmountRef);

    const inputAmountRef = generateTag({
        tagName: 'input',
        tagClass: 'input',
        tagId: 'amount',
        tagAttrs: [
            {
                type: 'type',
                value: 'number'
            },
            {
                type: 'value',
                value: '100'
            }
        ]
    });
    fragment.appendChild(inputAmountRef);

    [
        {
            id: 'currencyInput',
            text: 'Currency Type From'
        },
        {
            id: 'currencyOutput',
            text: 'Currency Type To'
        },
    ].forEach(({id, text}) => {
        const labelRef = generateTag({
            tagName: 'label',
            tagClass: 'lbl',
            tagAttrs: [{type: 'for', value: id}],
            tagText: text
        });

        fragment.appendChild(labelRef);

        const selectRef = generateTag({
            tagName: 'select',
            tagId: id,
            tagClass: 'input'
        })
        fragment.appendChild(selectRef);


        currencyCodes.forEach(({code, name}) => {
            const optionRef = generateTag({
                tagName: 'option',
                tagText: name,
                tagAttrs: [{type: 'value', value: code}]
            })
            selectRef.appendChild(optionRef);
        })

    })

    const btnRef = generateTag({
        tagName: 'button',
        tagId: 'btnSubmit',
        tagText: 'Calculate',
        tagAttrs: [{type: 'type', value: 'submit'}],
        tagEvents: [{
            type: 'click',
            cb: () => {
            }
        }]
    });
    fragment.appendChild(btnRef);


    return fragment;
}

export function generateGUI() {
    const sectionRef = generateTag({
        tagName: 'section',
        tagClass: 'box'
    });

    const h1Ref = generateTag({
        tagName: 'h1',
        tagClass: 'hdl',
        tagText: 'Currency Calculator'
    });
    sectionRef.appendChild(h1Ref);

    const formRef = generateTag({
        tagName: 'form',
        tagClass: 'currency-form',
        tagAttrs: [{type: 'action', value: ''}, {type: 'method', value: 'post'}]
    });
    formRef.appendChild(generateForm());
    sectionRef.appendChild(formRef);

    const resultsRef = generateTag({tagClass: 'results'});
    sectionRef.appendChild(resultsRef);


    return sectionRef;
}