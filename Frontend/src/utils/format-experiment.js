function formatExperience(exp) {
    const fieldsToParse = ['content', 'ageFilter', 'spokenLanguage', 'nativeLanguage', 'region', 'schoolLevel'];

    return fieldsToParse.reduce((acc, field) => {
        return {
            ...acc,
            [field]: exp[field] ? JSON.parse(exp[field]) : null,
        }
    }, exp);
}

export default formatExperience;