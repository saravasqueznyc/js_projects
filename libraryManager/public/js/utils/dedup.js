

export function removeDuplicatesByKey(items, key){
    
    const reviewed = new Set();
    const result = [];
    
    for(const item of items){
        const value = item[key];

        if(!reviewed.has(value)){
            reviewed.add(value);
            result.push(item);
        }
    }
    return result;
}

