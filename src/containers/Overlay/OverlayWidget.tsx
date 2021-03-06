import { Button, Grid, Paper, Typography } from '@material-ui/core';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { hideOverlay } from '../../context/overlays/actions';
import { useOverlayContext } from '../../context/overlays/OverlaysContext';

const StyledOverlay = styled(Paper)`
  padding: 1em;
  margin: 0 auto;
`;

const Title = styled(Typography)`
  font-size: 1.5em !important;
  margin-bottom: 0.5em !important;
  font-family: 'Ruslan Display', cursive !important;
`;

const Message = styled(Typography)`
  margin-bottom: 0.5em !important;
`;

const StyledActionContainer = styled.div`
  margin-top: 1em;
  width: 100%;
  > button {
    margin-top: 0.8em;
  }
`;

const StyledContentContainer = styled(Grid)`
  text-align: justify !important;
`;

const StyledCancelButton = styled(Button)`
  margin-right: 1em !important;
`;

interface Props {
  title: string;
  actions: ReactNode;
  secondaryActions?: ReactNode;
  message?: string;
  content?: ReactNode;
  onCancel?: () => void;
  hideCancelAction?: boolean;
}

const OverlayWidget: FC<Props> = ({
  title,
  actions,
  message,
  content,
  onCancel,
  secondaryActions,
  hideCancelAction,
}) => {
  const [, dispatch] = useOverlayContext();
  function handleCancel() {
    if (onCancel) onCancel();
    dispatch(hideOverlay());
  }
  return (
    <StyledOverlay>
      <Grid container>
        <Grid item>
          <Title>{title}</Title>
          {message && <Message>{message}</Message>}
        </Grid>
        <StyledContentContainer item xs={12}>
          {content}
        </StyledContentContainer>
      </Grid>
      <Grid container justify="flex-end">
        <StyledActionContainer>
          {actions}
          {secondaryActions}
          {!hideCancelAction && (
            <StyledCancelButton color="secondary" variant="outlined" onClick={handleCancel} fullWidth>
              Отмена
            </StyledCancelButton>
          )}
        </StyledActionContainer>
      </Grid>
    </StyledOverlay>
  );
};

export default OverlayWidget;
