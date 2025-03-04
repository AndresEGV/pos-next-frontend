import { formatCurrency } from "../../../src/utils";
type AmountProps = {
  label: string;
  amount: number;
  discount?: boolean;
};

const Amount = ({ label, amount, discount }: AmountProps) => {
  return (
    <div
      className={`${
        discount && "bg-green-300 text-green-900 p-1"
      } flex justify-between`}
    >
      <dt className="font-bold">{label}</dt>
      <dd className="text-gray-900">
        {" "}
        {discount && "-"} {formatCurrency(amount)}
      </dd>
    </div>
  );
};

export default Amount;
