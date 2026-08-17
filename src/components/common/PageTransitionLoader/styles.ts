import styled from 'styled-components';

export const FullScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Keeps the loader above everything */
`;

export const LoadingText = styled.h3`
  color: #00009c;
  margin-top: 16px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.5px;
`;