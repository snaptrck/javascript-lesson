/*
 Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. 
 Return true if the last character is either lower-case x or upper-case X, false otherwise.
*/

function endsWithX(string) {
    
    lastChar = string.slice(-1);
    if(lastChar === 'X'){
        return true;
    } else if(lastChar === 'x'){
        return true
    } else {
        return false;
    }
}

module.exports = endsWithX;