module.exports = function toReadable(number) {
    let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let c;

    if (number < 20) {
        c = a[number];
        return c;
    } else if (number >= 20 && number < 100) {
        c = b[Math.trunc(number / 10)];
        if (number % 10 > 0) {
            c += ' ' + toReadable(number % 10);
        }
    } else if (number >= 100) {
        c = a[Math.trunc(number / 100)] + ' hundred';
        if (number % 100 > 0) {
            c += ' ' + toReadable(number % 100);
        }
    }

    return c;

}