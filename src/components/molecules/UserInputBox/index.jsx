import React, { useContext } from 'react';
import Input from 'components/atoms/Input';
import Selector from 'components/molecules/Selector';
import * as Styled from 'components/molecules/UserInputBox/UserInputBox.style';
import { WalletContext } from 'context/Wallet';
import { LogContext } from 'context/Log';
import { calcInsertedMoney } from 'context/Wallet/reducer';

const UserInputBox = ({ title, ...props }) => {
  const { state, walletDispatch, insertMoney } = useContext(WalletContext);
  const { addLog, LOG_TYPE, logDispatch } = useContext(LogContext);

  const handleKeyPress = ({ key, target }) => {
    if (key !== 'Enter' || target.value === '') {
      return;
    }

    const { walletData } = state;
    const { usedMoneyData, usedSumOfMoney } = calcInsertedMoney(walletData, target.value);

    insertMoney(walletDispatch, { usedMoneyData, usedSumOfMoney });
    addLog(logDispatch, LOG_TYPE.INPUT, usedSumOfMoney);
    target.value = '';
  };

  const handleOnInput = ({ target }) => {
    const value = target.value;
    target.value = parseInt(value);

    if (value <= 0 || !state.sumOfMoney) {
      target.value = '';
      return;
    }

    if (value > state.sumOfMoney) {
      target.value = state.sumOfMoney;
    }
  };

  return (
    <Styled.UserInputBox>
      <Input onKeyPress={handleKeyPress} onInput={handleOnInput} type="number" />
      <Selector />
    </Styled.UserInputBox>
  );
};

export default UserInputBox;
