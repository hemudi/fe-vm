import Button from 'components/atoms/Button/Button';
import Label from 'components/atoms/Label/Label';
import LogList from 'components/molecules/LogList/LogList';
import NavButton from 'components/molecules/NavButton/NavButton';
import UserInputBox from 'components/molecules/UserInputBox/UserInputBox';
import * as Styled from './VendingMachineController.style';

const VMController = () => {
  const labelStyle = {
    flexType: 'centerRight',
    sizeType: 'large',
    fontType: 'digital',
    borderType: 'rounded',
  };

  const buttonStyle = {
    sizeType: 'large',
    borderType: 'rounded',
    colorType: 'point',
    fontType: 'medium',
  };

  return (
    <Styled.VMController>
      <NavButton />
      <Styled.ControllerWrapper>
        <Label {...labelStyle}>0</Label>
        <UserInputBox></UserInputBox>
        <Button {...buttonStyle}>반환하기</Button>
        <LogList />
      </Styled.ControllerWrapper>
    </Styled.VMController>
  );
};

export default VMController;
