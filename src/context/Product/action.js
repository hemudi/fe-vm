import { getProductsData } from 'api';

/* Type */
export const INIT_PRODUCT = 'initProduct';
export const BUY_PRODUCT = 'buyProduct';

/* Dispatch Action */
const initProduct = async dispatch => {
  const productData = await getProductsData();
  dispatch({ type: INIT_PRODUCT, payload: productData });
};

const buyProduct = (dispatch, selectedId) => {
  dispatch({ type: BUY_PRODUCT, payload: { selectedId } });
};

export const dispatchAction = {
  initProduct,
  buyProduct,
};
