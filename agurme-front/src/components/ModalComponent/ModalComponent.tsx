import React, {useEffect} from 'react';
import * as style from './ModalComponentStyle.module.sass'


type ModalComponentProps = {
  onClose: () => void;
  children: JSX.Element;
}

export default function ModalComponent(props: ModalComponentProps) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"
    };
  }, []);

    return (
      <>
        <div className={style.container}>
          {props.children}
        </div>
        <div onClick={() => props.onClose()} className={style.overlay}/>

      </>
    );
};
