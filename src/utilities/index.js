import toast from "react-hot-toast";

// ===============get data from local storage
const getFromLocalStorage = () => {
  const productsList = [];
  const verifyProductsList = localStorage.getItem("productsList");
  if (verifyProductsList) {
    const productsList = JSON.parse(verifyProductsList);
    // console.log(productsList);
    return productsList;
  }
  return productsList;
};

//=================== set data to local storage
const setToLocalStorage = (cardDetail) => {
  // console.log(cardDetail);
  const productsList = getFromLocalStorage();
  const isExist = productsList.find(
    (cardItem) => cardItem.id === cardDetail.id
  );
  if (isExist) {
    return toast.error("already exist");
  } else {
    productsList.push(cardDetail);
    localStorage.setItem("productsList", JSON.stringify(productsList));
    return toast.success("successfully added");
  }
};
//======================== remove data from local storage
const removeFromLocalStorage = () => {};

//============================== export all function
export { getFromLocalStorage, setToLocalStorage, removeFromLocalStorage };
