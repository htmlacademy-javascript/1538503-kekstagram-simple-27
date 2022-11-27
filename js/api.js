const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((receivedData) => receivedData.json())
    .then((photos) => onSuccess(photos));
};

export {getData};
