import * as yup from 'yup';

const validationMap = {
  required: (yupRule) => yupRule.required(),
  email: (yupRule) => yupRule.email(),
};

console.log(validationMap.required(yup.string()));


export const useValidationAdapter = () => {
  const parseRules = (rules: {}) => {
    const yupInstance = rules.number ? yup.number() : yup.string();
    console.log(rules);
    Object.entries(rules).reduce((a, { 0: ruleName, 1: ruleValue }) => {
      console.log('rule name');
      console.log(ruleName);
      console.log(validationMap[ruleName](yupInstance));

      return validationMap[ruleName](yupInstance);
    }, yupInstance);

    console.log('yupInstance');

    return yupInstance;
  };
  return { parseRules };
}