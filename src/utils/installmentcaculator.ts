type InstallmentResult = {
  totalAmount: number; // مجموع شهریه + کارمزد
  perInstallment: number; // مبلغ هر قسط
};

export function calculateInstallment(
  tuition: number,
  months: number
): InstallmentResult {
  if (tuition <= 0 || ![3, 6, 9, 12].includes(months)) {
    return { totalAmount: 0, perInstallment: 0 };
  }

  let feePercent = 0;

  switch (months) {
    case 3:
      feePercent = 2;
      break;
    case 6:
      feePercent = 4;
      break;
    case 9:
      feePercent = 8;
      break;
    case 12:
      feePercent = 16;
      break;
  }

  const totalAmount = tuition + (tuition * feePercent) / 100;
  const perInstallment = totalAmount / months;

  return {
    totalAmount,
    perInstallment,
  };
}
