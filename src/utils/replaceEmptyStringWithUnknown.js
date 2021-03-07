const replaceEmptyStringWithUnknown = (string) => {
    
    if (string === undefined) {
        return 'Unknown';
    } 
    else if (string.length === 0) {
        return 'Unknown';
    }
    else {
        return string;
    }
};

module.exports = replaceEmptyStringWithUnknown;