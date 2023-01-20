// Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка..."). 
// Известно, что в строке встречаются повторяющиеся слова. 
// Нужно написать функцию на JS.
// На вход передаются строка с дублями, а на выходе мы получаем строку без дублей не используя set

const STRING = "кошка,собака,лошадь,корова,кошка"
const DEFAULT_SPLIT = ",";

const duplicateString = (string) => {
  const stringArray            = string.split(DEFAULT_SPLIT);
  const stringWithoutDuplicate = new Set(stringArray);
  const stringResult           = Array.from(stringWithoutDuplicate).join(DEFAULT_SPLIT);

  return stringResult;
}

console.log(duplicateString(STRING))
