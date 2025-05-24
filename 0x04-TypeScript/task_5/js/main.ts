// Interface for MajorCredits with a unique brand
interface MajorCredits {
  credits: number;
  readonly brand: "major";
}

// Interface for MinorCredits with a unique brand
interface MinorCredits {
  credits: number;
  readonly brand: "minor";
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major"
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor"
  };
}

// Example usage
const major1: MajorCredits = { credits: 3, brand: "major" };
const major2: MajorCredits = { credits: 4, brand: "major" };
const minor1: MinorCredits = { credits: 3, brand: "minor" };
const minor2: MinorCredits = { credits: 4, brand: "minor" };

const totalMajorCredits = sumMajorCredits(major1, major2);
const totalMinorCredits = sumMinorCredits(minor1, minor2);

console.log(`Total Major Credits: ${totalMajorCredits.credits}`); // Output: Total Major Credits: 7
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`); // Output: Total Minor Credits: 7