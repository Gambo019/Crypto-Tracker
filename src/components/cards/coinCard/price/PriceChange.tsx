import { memo } from "react";
import useColorChange from "use-color-change";
import { currencyValueFormat } from "@/helpers/numberFromat";

const Price = ({ price }: { price: number }) => {
  const colorStyle = useColorChange(price, {
    higher: "green",
    lower: "red",
    duration: 3500,
  });
  const coinPrice =
    currencyValueFormat.format(price) === "$0.00"
      ? "$" + price.toFixed(9)
      : currencyValueFormat.format(price);
  return <p style={colorStyle}>{coinPrice}</p>;
};

export default memo(Price);
