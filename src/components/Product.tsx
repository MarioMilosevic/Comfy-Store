const Product = ({ image, title, price }) => {
  return (
    <div className="flex flex-col cursor-pointer items-center gap-8 shadow-md duration-200 h-[400px] p-2 rounded-lg hover:shadow-xl">
      <img
        src={image}
        alt={image}
        className="object-cover rounded-lg h-[75%] w-full"
      />
      <div className="flex flex-col items-center gap-2">
        <h2 className="capitalize font-semibold tracking-widest">{title}</h2>
        <span>${(price / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Product;
