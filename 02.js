function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }

    if (val > 10) {  // Change this line
      return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);
