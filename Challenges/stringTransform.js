function stringTransform(input) {
    const length = input.length;

    if (length % 15 === 0) {
        // If length is divisible by 15, reverse the string and then replace with ASCII codes
        return input.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        // If length is divisible by 5, replace each character with its ASCII code
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // If length is divisible by 3, reverse the string
        return input.split('').reverse().join('');
    } else {
        // If none of the conditions are met, return the original string
        return input;
    }
}

// Example usage:
console.log(stringTransform("Hamburger")); // Output: "regrubmaH"
console.log(stringTransform("Pizza")); // Output: "80 105 122 122 97"
console.log(stringTransform("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
console.log(stringTransform("Example")); // No specific transformation applied