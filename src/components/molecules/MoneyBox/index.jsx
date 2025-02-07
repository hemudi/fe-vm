import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as Styled from 'components/molecules/MoneyBox/MoneyBox.style';
import Button from 'components/atoms/Button';
import Label from 'components/atoms/Label';
import { WalletContext } from 'context/Wallet';
import { calcInsertedMoney } from 'context/Wallet/reducer';
import { LogContext } from 'context/Log';

const MoneyBox = ({ unit, count, value, ...props }) => {
  const { state, walletDispatch, insertMoney } = useContext(WalletContext);
  const { addLog, LOG_TYPE, logDispatch } = useContext(LogContext);

  const buttonStyle = {
    sizeType: 'xLarge',
    borderType: 'rounded',
    fontType: 'large',
    colorType: count > 0 ? 'default' : 'disabled',
    disabled: count <= 0,
  };

  const handleOnClick = () => {
    const { walletData } = state;
    const { usedMoneyData, usedSumOfMoney } = calcInsertedMoney(walletData, value);
    insertMoney(walletDispatch, { usedMoneyData, usedSumOfMoney });
    addLog(logDispatch, LOG_TYPE.INPUT, usedSumOfMoney);
  };

  return (
    <Styled.MoneyBox flexType={'centerBetween'}>
      <Button onClick={handleOnClick} {...buttonStyle}>
        {unit}
      </Button>
      <Label flexType="center" sizeType="small" fontType="medium" borderType="rounded">
        {count} 개
      </Label>
    </Styled.MoneyBox>
  );
};

MoneyBox.defaultProps = {
  unit: '10원',
  count: '0',
};

MoneyBox.propTypes = {
  unit: PropTypes.string,
  count: PropTypes.number,
};

export default MoneyBox;
