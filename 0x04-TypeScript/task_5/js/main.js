// Function to sum MajorCredits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "major"
    };
}
// Function to sum MinorCredits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "minor"
    };
}
// Example usage
var major1 = { credits: 3, brand: "major" };
var major2 = { credits: 4, brand: "major" };
var minor1 = { credits: 3, brand: "minor" };
var minor2 = { credits: 4, brand: "minor" };
var totalMajorCredits = sumMajorCredits(major1, major2);
var totalMinorCredits = sumMinorCredits(minor1, minor2);
console.log("Total Major Credits: ".concat(totalMajorCredits.credits)); // Output: Total Major Credits: 7
console.log("Total Minor Credits: ".concat(totalMinorCredits.credits)); // Output: Total Minor Credits: 7
