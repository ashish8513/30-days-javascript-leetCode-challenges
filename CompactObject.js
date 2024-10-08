// Given an object or array obj, return a compact object.

// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
      return obj.filter(Boolean).map(compactObject);
    }
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    const result = {};
    for (const key in obj) {
      const value = compactObject(obj[key]);
      if (Boolean(value)) {
        result[key] = value;
      }
    }
    return result;   
  };