import { Popup } from './popup.js';

export class PopupWithForm extends Popup {
    constructor (popup, submitCallback) {
        super(popup);
        this._form = popup.querySelector('.form');
        this._onSubmit = submitCallback;
        this._inputList = this._form.querySelectorAll('.form__item');
        this._popupButton = this._form.querySelector('.form__btn');
        this._inputValues = {};
    }

    closePopup() {
        this._form.reset();
        super.closePopup();
    }

    _getInputValues() {
        this._inputList.forEach((inputElement) => {
            this._inputValues[inputElement.name] = inputElement.value;
        })
        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            // const isGood = false;
            // if (isGood) {
            //   this._onSubmit(this._getInputValues());
            // }
          });
    }      
}