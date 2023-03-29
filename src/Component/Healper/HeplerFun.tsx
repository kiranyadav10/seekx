export const stringToColour = function (str: string) {
  if (str !== null && str !== undefined && str?.length && str?.length > 0) {
    var hash = 0;
    for (var i = 0; i < str?.length; i++) {
      hash = str?.charCodeAt(i) + ((hash << 1) - hash);
    }
    var colour = "#";
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 2)) & 0xff;
      colour += ("00" + value?.toString(16)).substr(-2);
    }
    return colour;
  } else {
    return "";
  }
};
