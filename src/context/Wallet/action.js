import { getWalletData } from 'api';

/* Type */
export const INIT_WALLET = 'initWallet';
export const INSERT_MONEY = 'insertMoney';
export const RETURN_MONEY = 'returnMoney';
export const SPEND_MONEY = 'spendMoney';

/* Dispatch Action */
const initWallet = async dispatch => {
  const walletData = await getWalletData();
  dispatch({ type: INIT_WALLET, payload: { walletData } });
};

const insertMoney = (dispatch, payload) => {
  dispatch({ type: INSERT_MONEY, payload });
};

const returnMoney = dispatch => {
  dispatch({ type: RETURN_MONEY });
};

const spendMoney = (dispatch, cost) => {
  dispatch({ type: SPEND_MONEY, payload: { cost } });
};

export const dispatchAction = {
  initWallet,
  insertMoney,
  returnMoney,
  spendMoney,
};
