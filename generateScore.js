
function calculateNeighborhoodScore(data) {
    const { greenSpaces, safety, educationFacilities, healthcareServices, playAreas, communitySupport } = data;

    // Weighted calculation (adjust weights as necessary)
    const weights = {
        greenSpaces: 0.2,
        safety: 0.3,
        educationFacilities: 0.2,
        healthcareServices: 0.15,
        playAreas: 0.1,
        communitySupport: 0.05,
    };

    const score =
        greenSpaces * weights.greenSpaces +
        safety * weights.safety +
        educationFacilities * weights.educationFacilities +
        healthcareServices * weights.healthcareServices +
        playAreas * weights.playAreas +
        communitySupport * weights.communitySupport;

    return Math.round(score);
}

// Example usage
const exampleData = {
    greenSpaces: 85,
    safety: 75,
    educationFacilities: 90,
    healthcareServices: 88,
    playAreas: 80,
    communitySupport: 95,
};

console.log("Neighborhood Score:", calculateNeighborhoodScore(exampleData));
