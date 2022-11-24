import productsMockData from 'mock/Product';
import walletMockData from 'mock/Wallet';
import API_URL from 'constants/apiUrl';

const { products, wallet } = API_URL;

const mockData = {
  [products]: productsMockData,
  [wallet]: walletMockData,
};

const getMockData = path => mockData[path];

export default getMockData;
