declare module 'react-outside-click-handler' {
  import { ReactNode } from 'react';
  
  interface OutsideClickHandlerProps {
    onOutsideClick: () => void;
    children: ReactNode;
  }
  
  const OutsideClickHandler: React.FC<OutsideClickHandlerProps>;
  export default OutsideClickHandler;
}
