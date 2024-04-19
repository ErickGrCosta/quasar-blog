export function required (value) {
  return (value && !!value.length) || 'Campo obrigatório.'
}

export const rulesProps = {
  lazyRules: true,
  rules: [required]
}
