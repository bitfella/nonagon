export function getHashKeyValue(key, target = window.location.hash) {
  const matches = target.match(new RegExp(key + '=([^&]*)'));
  return matches ? matches[1] : null;
}

export function objectToQueryString(obj) {
  const queryString = [];

  Object.keys(obj).forEach(key => {
    queryString.push(
      encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
    );
  });

  return queryString.join('&');
}

export function arrayValuesToMinMaxObjectProperties(obj) {
  const newObj = {};

  Object.keys(obj).forEach(key => {
    obj[key].forEach((value, index) => {
      if (index === 0) newObj['min_' + key] = value;
      if (index === 1) newObj['max_' + key] = value;
    });
  });

  return newObj;
}

export function getAlternativeImageSrc(
  text,
  width,
  height,
  bgColor,
  color,
  fontFamily,
  fontSize
) {
  const imageText = text.charAt(0).toUpperCase();
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;
  context.rect(0, 0, width, height);
  context.fillStyle = bgColor;
  context.fill();
  context.font = `500 ${fontSize} ${fontFamily}`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = color;
  context.fillText(imageText, canvas.width * 0.5, canvas.height * 0.55);

  return canvas.toDataURL('image/png', 1.0);
}

export function goToURI(uri) {
  window.location.assign(uri);
}
