//  -------------- STRING --------------
interface String {
  padLeft(width: number, leftCharacter?: string): string;
}

String.prototype.padLeft = function(
  width: number,
  leftCharacter?: string,
): string {
  leftCharacter = leftCharacter || '0';
  let myString = this.toString();
  return myString.length >= width
    ? myString
    : new Array(width - myString.length + 1).join(leftCharacter) + myString;
};

//  -------------- NUMBER --------------

interface Number {
  padLeft(width: number, leftCharacter?: string): string;
}
