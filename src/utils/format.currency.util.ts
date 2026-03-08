const CURRENCY_FORMATTER = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  minimumFractionDigits: 2,
});

export const formatCurrency = (value: string) => {
  const numeric = value.replace(/\D/g, '');

  if (!numeric) return '';

  const amount = Number(numeric) / 100;

  return CURRENCY_FORMATTER.format(amount);
};
