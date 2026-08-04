/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {

    if(s1.length > s2.length){
        return false;
    }

    let s1Count = new Array(26).fill(0)
    const windowCount = new Array(26).fill(0);
     

     for(let i=0; i < s1.length; i++){
        s1Count[s1.charCodeAt(i) - 97]++;
        windowCount[s2.charCodeAt(i) - 97]++;
     }

     if(isSame(s1Count , windowCount)){
        return true;
     }

     for(right = s1.length; right < s2.length; right++){
        windowCount[s2.charCodeAt(right) - 97]++;
        windowCount[s2.charCodeAt(right - s1.length) - 97]--;

        if(isSame(s1Count , windowCount )){
            return true;
        }
     }
 
  return false;
    
};


function isSame(arr1 , arr2){
    for(let i = 0; i< 26; i++){
        if(arr1[i]  !== arr2[i]){
            return false;
        }
    }
    return true;
}