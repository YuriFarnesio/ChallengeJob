import React from 'react';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';
import { useRouter } from 'next/router';

import { Button } from '../../styles/button';
import { Container, Content } from './styles';

interface HeaderProps {
  titleIcon?: boolean,
  title: string,
  rightButton?: boolean,
  rightButtonIcon?: boolean,
  onClickButton?: () => void
}

export function Header({ titleIcon, title, rightButton, rightButtonIcon, onClickButton }: HeaderProps) {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <div className="title">
          {titleIcon && (<MdKeyboardArrowLeft onClick={() => router.replace('/')} />)}

          <h1>{title}</h1>
        </div>

        {
          rightButton && (
            <Button
              className="header"
              onClick={onClickButton}
            >
              <p>Adicionar</p>
              {rightButtonIcon && (<MdAdd />)}
            </Button>
          )
        }
      </Content>
    </Container>
  );
}