export const getCCListingsLatest = ({ ccListingsLatest }) => ccListingsLatest;
export const getCCLatest = ({ ccListingsLatest: { cryptocurrencies } }, cc) => cryptocurrencies[cc];
