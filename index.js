/**
 * @param {string} arabicNumber
 * 
 * @return {number|null} 
 */
function convertArabicNumbers(arabicNumber) {
    let number = arabicNumber.toString().replace(/[٠١٢٣٤٥٦٧٨٩]/g, function(d) {
        return d.charCodeAt() - 1632;
    }).replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function(d) {
        return d.charCodeAt(0) - 1776;
    });
    
    return isNaN(parseInt(number)) ? null : number;
}

module.exports = convertArabicNumbers;
