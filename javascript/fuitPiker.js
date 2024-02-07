/**
* @return void
*/
export function onSuccess() {
  notify({"message": "SUCCESS"})
}

/**
* @return void
*/
export function onError() {
  notify({"message":"ERROR"})
}

/**
* @param {GrocerQuery} query
* @param {FruitPickerSuccessCallback} onSuccessCallback
* @param {FruitPickerErrorCallback} onErrorCallback
* @return void
*/
export function orderFromGrocer(query, successCallback, errorCallback) {
  order(query, successCallback, errorCallback);
}

/**
* @param {string} variety
* @param {number} quantity
* @return void
*/
export function postOrder(variety, quantity) {
  order({ variety, quantity }, onSuccess, onError);
}
