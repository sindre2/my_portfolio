import styled from "styled-components";

export const AnimationStyle = styled.div`
  .ani-container {
    display: flex;
    justify-content: space-around;
    position: absolute;
    overflow: visible;
    z-index: -1;
    bottom: 100%;
  }

  .line_1 {
    animation: background-glide 9s linear infinite;
    animation-delay: 3s;
  }

  .line_2 {
    animation: background-glide 15s linear infinite;
    animation-delay: 4s;
  }

  .line_3 {
    animation: background-glide 12s linear infinite;
    animation-delay: 6s;
  }

  .line_4 {
    animation: background-glide 10s linear infinite;
  }

  .line_5 {
    animation: background-glide 14s linear infinite;
    animation-delay: 2s;
  }

  .line_6 {
    animation: background-glide 9s linear infinite;
    animation-delay: 7s;
  }

  .line_7 {
    animation: background-glide 10s linear infinite;
    animation-delay: 2s;
  }

  .line_8 {
    animation: background-glide 11s linear infinite;
  }

  .line_9 {
    animation: background-glide 10s linear infinite;
    animation-delay: 7s;
  }

  .line_10 {
    animation: background-glide 9s linear infinite;
    animation-delay: 3s;
  }

  .line_11 {
    animation: background-glide 14s linear infinite;
  }

  .line_12 {
    animation: background-glide 10s linear infinite;
    animation-delay: 5s;
  }

  .line_13 {
    animation: background-glide 15s linear infinite;
  }

  .line_14 {
    animation: background-glide 10s linear infinite;
  }

  .line_15 {
    animation: background-glide 10s linear infinite;
    animation-delay: 3s;
  }

  .ani {
    height: 15px;
    width: 4px;
    border-radius: 8px;
    background-color: rgb(255, 0, 0, 0.25);
    margin: 0 3rem;
    position: relative;
  }

  @keyframes background-glide {
    from {
      top: 100vh;
    }
    to {
      top: 0px;
    }
  }
`;
