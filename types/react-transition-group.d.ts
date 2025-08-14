declare module 'react-transition-group' {
  import { ReactNode, RefObject } from 'react';
  
  interface CSSTransitionProps {
    classNames?: string | object;
    in?: boolean;
    timeout?: number | object;
    nodeRef?: RefObject<any>;
    unmountOnExit?: boolean;
    children?: ReactNode;
  }
  
  export const CSSTransition: React.FC<CSSTransitionProps>;
}
