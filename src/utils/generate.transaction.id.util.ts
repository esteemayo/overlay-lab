export const generateTransactionId = () => {
  return `TX-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};
