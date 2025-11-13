obj = {
    harry: 98,
    rohan: 70,
    aakash: 7,
}

let keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
    let student = keys[i];
    console.log(`Marks of ${student} are ${obj[student]}`);
  }