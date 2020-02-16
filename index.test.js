const convertArabicNumbers = require('./index');

test('convert Arabic Chars', () => {
  expect(convertArabicNumbers('٠١٢٣٤٥٦٧٨٩')).toBe("0123456789");
});

test('convert Farsi Chars', () => {
    expect(convertArabicNumbers('۰۱۲۳۴۵۶۷۸۹')).toBe("0123456789");
});
