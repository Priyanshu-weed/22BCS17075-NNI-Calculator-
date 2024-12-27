
function findUnderservedAreas(neighborhoods, threshold) {
    return neighborhoods.filter((n) => n.safety < threshold || n.greenSpaces < threshold);
}

// Example Usage
const neighborhoods = [
    { name: 'Central Park', safety: 75, greenSpaces: 85 },
    { name: 'Downtown', safety: 50, greenSpaces: 45 },
    { name: 'Suburb', safety: 90, greenSpaces: 70 },
];

console.log('Underserved Areas:', findUnderservedAreas(neighborhoods, 60));
