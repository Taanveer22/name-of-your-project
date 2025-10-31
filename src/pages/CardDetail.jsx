import { useLoaderData } from "react-router-dom";

const CardDetail = () => {
  const productDetail = useLoaderData();
  console.log(productDetail);
  const {
    thumbnail,
    title,
    description,
    brand,
    category,
    returnPolicy,
    shippingInformation,
    warrantyInformation,
  } = productDetail;
  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-gray-300 border-2 border-gray-200 rounded-lg shadow-sm ">
        <div className="w-1/2">
          <img
            className="w-full object-cover rounded-t-lg h-96"
            src={thumbnail}
          />
        </div>

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{description}</p>
          <p className="mb-3 font-normal text-gray-700">{brand}</p>
          <p className="mb-3 font-normal text-gray-700">{category}</p>
          <p className="mb-3 font-normal text-gray-700">{returnPolicy}</p>
          <p className="mb-3 font-normal text-gray-700">
            {shippingInformation}
          </p>
          <p className="mb-3 font-normal text-gray-700">
            {warrantyInformation}
          </p>
          <button
            type="button"
            className="w-1/2 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add To Dashboard
          </button>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
