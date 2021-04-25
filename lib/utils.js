/**
 * Truncate a string of text by a certain length, inclusive of the string
 * being appended to the end. Default length: 32, default appendix: '...'
 * @param {string} str String to be truncated
 * @param {number} length Total desired length, inclusive of appendix
 * @param {string} appendix String appended to the end of truncated `str`
 * @returns {string} Truncated string plus appendix
 */
export function truncateText(str, length = 32, appendix = '...') {
  return str.length > length
    ? str.substring(0, length - appendix.length) + appendix
    : str
}

export const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

/**
 * Comparison function for sorting array of objects by property name
 * @param {string} property Name of the object property by which sort should occur
 * @returns 
 */
export function sortByProperty(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      // Sort numbers or strings
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

/**
 * Given a numeric value of USD, format that string to US locale
 * @param {number} number Numeric value of US currency
 * @returns {string}
 */
export function formatUSD(number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number)
}

/**
 * Given an ISO string, return an `locales`-formatted DateTime string
 * @param {string} isoString ISO 8601 string representing a DateTime
 * @param {string|string[]} locales Individual or array of IANA language-region subtags
 * @param {Object} options Intl DateTimeFormat options
 * @returns {string}
 */
export function formatDate(
  isoString,
  locales = 'en-US',
  options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
  }
) {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat(locales, options).format(date);
}
