function isSameType(value1, value2) {
  //your js code here
	if (typeof value1 === 'string' && !isNaN(value1)) {
    value1 = Number(value1);
  }
  
  if (typeof value2 === 'string' && !isNaN(value2)) {
    value2 = Number(value2);
  }

  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Check if one value is NaN and the other is a number
  if ((isNaN(value1) && typeof value2 === 'number') || (isNaN(value2) && typeof value1 === 'number')) {
    return false;
  }

  // Check if types are different and one of them is a string
  if (typeof value1 !== typeof value2) {
    return false;
  }

  // Check if the types are the same
  return true;
}
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
