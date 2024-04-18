export function required (val) {
  return (val && val.length > 0) || 'Por favor, digite algo'
}

export const inputProps = {
  filled: true,
  lazyRules: true,
  rules: [required]
}
