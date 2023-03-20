const data = {};
switch (true) {
  case data === undefined:
    console.log("undefined!");
    break;
  case data === null:
    console.log("null!");
    break;
  case typeof data === "string":
    console.log("String!");
    break;
  case typeof data === "number":
    console.log("number!");
    break;
  case Array.isArray(data):
    console.log("Array!");
    break;
  case typeof data === "boolean":
    console.log("boolean!");
    break;
  case typeof data === "bigint":
    console.log("bigint!");
    break;
  case typeof data === "function":
    console.log("function!");
    break;
  case typeof data === "object":
    console.log("object!");
    break;
  case isNaN(data):
    console.log("NaN!");
    break;
  default:
    console.log("I have no idea");
    break;
}
