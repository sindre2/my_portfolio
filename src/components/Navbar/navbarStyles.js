import styled from "styled-components"
import { NavLink } from "react-router-dom"


// The nav main container
export const Nav = styled.nav`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    position: fixed;
    width: 100%;
    background-color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].background_one};
    z-index: 100;
    padding-right: 1rem;
    border-bottom: 2px solid gray;
    & h2 {
    color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].main_icon};
    }
    & .main-icon-and-light-dark-mode-icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 100px;
  }
`;

export const LightDarkModeCheckboxStyle = styled.input`
    appearance: none;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzNCAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2IDEwLjVMMTAgMjUuNUwxMS44NTc2IDI2LjAwMzFDMjEuMTIzIDI4LjUxMjUgMjkuMzQ3NiAxOS40OTY2IDI2IDEwLjVaIiBmaWxsPSJibGFjayIgc3Ryb2tlPSJibGFjayIvPgo8cGF0aCBkPSJNMjcuMzU5OCAyNy4zNTk4TDIyLjM0MDcgMjYuMDE1TDI2LjAxNSAyMi4zNDA3TDI3LjM1OTggMjcuMzU5OFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zMi4zNjY5IDExLjk2OTJMMjguMjg0MSAxNS4xODM0TDI3LjU0MiAxMC4wNDA1TDMyLjM2NjkgMTEuOTY5MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zMS42MzI5IDE5LjcwNUwyNi41NTA4IDIwLjc4NzhMMjguMTU0MiAxNS44NDUyTDMxLjYzMjkgMTkuNzA1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTkuODU1MTYgMzEuNjMxMkw4Ljc2MzggMjYuNTUwOUwxMy43MDkxIDI4LjE0NTlMOS44NTUxNiAzMS42MzEyWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE5LjIwMDMgMzEuNDk4NUwxNS43MDk5IDI3LjY0OTJMMjAuNzg4NiAyNi41NTExTDE5LjIwMDMgMzEuNDk4NVoiIGZpbGw9ImJsYWNrIi8+CjxsaW5lIHgxPSIzLjY1MzczIiB5MT0iMjguNjM5MyIgeDI9IjI4LjY1MzciIHkyPSI0LjYzOTMxIiBzdHJva2U9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMi4yNzg5IDIuNzcyNUwxMS45NzM0IDIuNTM0ODVDMTAuNjk0NCAxLjU0MDA4IDkuMTIwMzEgMSA3LjUgMUw4LjkzODc4IDIuMjIyNDJDMTMuMjgzOCA1LjkxNDA0IDEyLjUzNDkgMTIuODI0OCA3LjUgMTUuNUM5LjA3NDQ2IDE1LjgxNDkgMTAuNzA1NSAxNS4zNzI5IDExLjkwNTUgMTQuMzA2MkwxMi42MzYxIDEzLjY1NjhDMTUuOTQ1OCAxMC43MTQ5IDE1Ljc3NDQgNS40OTExOSAxMi4yNzg5IDIuNzcyNVoiIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xLjUgN0wxLjgzNjc3IDguMDM2NDdIMi45MjY1OEwyLjA0NDkxIDguNjc3MDVMMi4zODE2OCA5LjcxMzUzTDEuNSA5LjA3Mjk1TDAuNjE4MzIyIDkuNzEzNTNMMC45NTUwOTMgOC42NzcwNUwwLjA3MzQxNTMgOC4wMzY0N0gxLjE2MzIzTDEuNSA3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQuNSA0TDQuODM2NzcgNS4wMzY0N0g1LjkyNjU4TDUuMDQ0OTEgNS42NzcwNUw1LjM4MTY4IDYuNzEzNTNMNC41IDYuMDcyOTVMMy42MTgzMiA2LjcxMzUzTDMuOTU1MDkgNS42NzcwNUwzLjA3MzQyIDUuMDM2NDdINC4xNjMyM0w0LjUgNFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik00LjUgMTBMNC44MzY3NyAxMS4wMzY1SDUuOTI2NThMNS4wNDQ5MSAxMS42NzcxTDUuMzgxNjggMTIuNzEzNUw0LjUgMTIuMDcyOUwzLjYxODMyIDEyLjcxMzVMMy45NTUwOSAxMS42NzcxTDMuMDczNDIgMTEuMDM2NUg0LjE2MzIzTDQuNSAxMFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=");
    /* background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzNCAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMjIuMDUyMUwyNCA3LjA1MjA2TDIyLjE0MjQgNi41NDg5N0MxMi44NzcgNC4wMzk1OCA0LjY1MjQyIDEzLjA1NTQgOCAyMi4wNTIxWiIgZmlsbD0iYmxhY2siIHN0cm9rZT0iYmxhY2siLz4KPHBhdGggZD0iTTYuNjQwMTggNS4xOTIyMkwxMS42NTkzIDYuNTM3MDhMNy45ODUwNCAxMC4yMTEzTDYuNjQwMTggNS4xOTIyMloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xLjYzMzA4IDIwLjU4MjhMNS43MTU5MSAxNy4zNjg3TDYuNDU3OTkgMjIuNTExNkwxLjYzMzA4IDIwLjU4MjhaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi4zNjcwOCAxMi44NDcxTDcuNDQ5MTYgMTEuNzY0M0w1Ljg0NTg1IDE2LjcwNjlMMi4zNjcwOCAxMi44NDcxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTI0LjE0NDggMC45MjA4NjZMMjUuMjM2MiA2LjAwMTEyTDIwLjI5MDkgNC40MDYxM0wyNC4xNDQ4IDAuOTIwODY2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE0Ljc5OTcgMS4wNTM1OEwxOC4yOTAxIDQuOTAyODdMMTMuMjExNCA2LjAwMTAxTDE0Ljc5OTcgMS4wNTM1OFoiIGZpbGw9ImJsYWNrIi8+CjxsaW5lIHgxPSIzMC4zNDYzIiB5MT0iMy45MTI3NiIgeDI9IjUuMzQ2MjciIHkyPSIyNy45MTI4IiBzdHJva2U9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMS43MjExIDI5Ljc3OTZMMjIuMDI2NiAzMC4wMTcyQzIzLjMwNTYgMzEuMDEyIDI0Ljg3OTcgMzEuNTUyMSAyNi41IDMxLjU1MjFMMjUuMDYxMiAzMC4zMjk2QzIwLjcxNjIgMjYuNjM4IDIxLjQ2NTEgMTkuNzI3MyAyNi41IDE3LjA1MjFDMjQuOTI1NSAxNi43MzcyIDIzLjI5NDUgMTcuMTc5MSAyMi4wOTQ1IDE4LjI0NTlMMjEuMzYzOSAxOC44OTUyQzE4LjA1NDIgMjEuODM3MiAxOC4yMjU2IDI3LjA2MDkgMjEuNzIxMSAyOS43Nzk2WiIgZmlsbD0iYmxhY2siIHN0cm9rZT0iYmxhY2siLz4KPHBhdGggZD0iTTMyLjUgMjUuNTUyMUwzMi4xNjMyIDI0LjUxNTZIMzEuMDczNEwzMS45NTUxIDIzLjg3NUwzMS42MTgzIDIyLjgzODVMMzIuNSAyMy40NzkxTDMzLjM4MTcgMjIuODM4NUwzMy4wNDQ5IDIzLjg3NUwzMy45MjY2IDI0LjUxNTZIMzIuODM2OEwzMi41IDI1LjU1MjFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjkuNSAyOC41NTIxTDI5LjE2MzIgMjcuNTE1NkgyOC4wNzM0TDI4Ljk1NTEgMjYuODc1TDI4LjYxODMgMjUuODM4NUwyOS41IDI2LjQ3OTFMMzAuMzgxNyAyNS44Mzg1TDMwLjA0NDkgMjYuODc1TDMwLjkyNjYgMjcuNTE1NkgyOS44MzY4TDI5LjUgMjguNTUyMVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yOS41IDIyLjU1MjFMMjkuMTYzMiAyMS41MTU2SDI4LjA3MzRMMjguOTU1MSAyMC44NzVMMjguNjE4MyAxOS44Mzg1TDI5LjUgMjAuNDc5MUwzMC4zODE3IDE5LjgzODVMMzAuMDQ0OSAyMC44NzVMMzAuOTI2NiAyMS41MTU2SDI5LjgzNjhMMjkuNSAyMi41NTIxWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="); */
    background-size: contain;
    background-repeat: no-repeat;
    height: 32px;
    width: 32px;
    margin-left: 1rem;
    filter: invert(100%) sepia(36%) saturate(132%) hue-rotate(282deg) brightness(113%) contrast(92%);
    &:hover {
      cursor: pointer;
      filter: invert(93%) sepia(66%) saturate(1906%) hue-rotate(357deg) brightness(107%) contrast(104%);
    }
    &:checked {
      cursor: pointer;
      /* background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzNCAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2IDEwLjVMMTAgMjUuNUwxMS44NTc2IDI2LjAwMzFDMjEuMTIzIDI4LjUxMjUgMjkuMzQ3NiAxOS40OTY2IDI2IDEwLjVaIiBmaWxsPSJibGFjayIgc3Ryb2tlPSJibGFjayIvPgo8cGF0aCBkPSJNMjcuMzU5OCAyNy4zNTk4TDIyLjM0MDcgMjYuMDE1TDI2LjAxNSAyMi4zNDA3TDI3LjM1OTggMjcuMzU5OFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zMi4zNjY5IDExLjk2OTJMMjguMjg0MSAxNS4xODM0TDI3LjU0MiAxMC4wNDA1TDMyLjM2NjkgMTEuOTY5MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zMS42MzI5IDE5LjcwNUwyNi41NTA4IDIwLjc4NzhMMjguMTU0MiAxNS44NDUyTDMxLjYzMjkgMTkuNzA1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTkuODU1MTYgMzEuNjMxMkw4Ljc2MzggMjYuNTUwOUwxMy43MDkxIDI4LjE0NTlMOS44NTUxNiAzMS42MzEyWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE5LjIwMDMgMzEuNDk4NUwxNS43MDk5IDI3LjY0OTJMMjAuNzg4NiAyNi41NTExTDE5LjIwMDMgMzEuNDk4NVoiIGZpbGw9ImJsYWNrIi8+CjxsaW5lIHgxPSIzLjY1MzczIiB5MT0iMjguNjM5MyIgeDI9IjI4LjY1MzciIHkyPSI0LjYzOTMxIiBzdHJva2U9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMi4yNzg5IDIuNzcyNUwxMS45NzM0IDIuNTM0ODVDMTAuNjk0NCAxLjU0MDA4IDkuMTIwMzEgMSA3LjUgMUw4LjkzODc4IDIuMjIyNDJDMTMuMjgzOCA1LjkxNDA0IDEyLjUzNDkgMTIuODI0OCA3LjUgMTUuNUM5LjA3NDQ2IDE1LjgxNDkgMTAuNzA1NSAxNS4zNzI5IDExLjkwNTUgMTQuMzA2MkwxMi42MzYxIDEzLjY1NjhDMTUuOTQ1OCAxMC43MTQ5IDE1Ljc3NDQgNS40OTExOSAxMi4yNzg5IDIuNzcyNVoiIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xLjUgN0wxLjgzNjc3IDguMDM2NDdIMi45MjY1OEwyLjA0NDkxIDguNjc3MDVMMi4zODE2OCA5LjcxMzUzTDEuNSA5LjA3Mjk1TDAuNjE4MzIyIDkuNzEzNTNMMC45NTUwOTMgOC42NzcwNUwwLjA3MzQxNTMgOC4wMzY0N0gxLjE2MzIzTDEuNSA3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQuNSA0TDQuODM2NzcgNS4wMzY0N0g1LjkyNjU4TDUuMDQ0OTEgNS42NzcwNUw1LjM4MTY4IDYuNzEzNTNMNC41IDYuMDcyOTVMMy42MTgzMiA2LjcxMzUzTDMuOTU1MDkgNS42NzcwNUwzLjA3MzQyIDUuMDM2NDdINC4xNjMyM0w0LjUgNFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik00LjUgMTBMNC44MzY3NyAxMS4wMzY1SDUuOTI2NThMNS4wNDQ5MSAxMS42NzcxTDUuMzgxNjggMTIuNzEzNUw0LjUgMTIuMDcyOUwzLjYxODMyIDEyLjcxMzVMMy45NTUwOSAxMS42NzcxTDMuMDczNDIgMTEuMDM2NUg0LjE2MzIzTDQuNSAxMFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="); */
      background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzNCAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMjIuMDUyMUwyNCA3LjA1MjA2TDIyLjE0MjQgNi41NDg5N0MxMi44NzcgNC4wMzk1OCA0LjY1MjQyIDEzLjA1NTQgOCAyMi4wNTIxWiIgZmlsbD0iYmxhY2siIHN0cm9rZT0iYmxhY2siLz4KPHBhdGggZD0iTTYuNjQwMTggNS4xOTIyMkwxMS42NTkzIDYuNTM3MDhMNy45ODUwNCAxMC4yMTEzTDYuNjQwMTggNS4xOTIyMloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xLjYzMzA4IDIwLjU4MjhMNS43MTU5MSAxNy4zNjg3TDYuNDU3OTkgMjIuNTExNkwxLjYzMzA4IDIwLjU4MjhaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi4zNjcwOCAxMi44NDcxTDcuNDQ5MTYgMTEuNzY0M0w1Ljg0NTg1IDE2LjcwNjlMMi4zNjcwOCAxMi44NDcxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTI0LjE0NDggMC45MjA4NjZMMjUuMjM2MiA2LjAwMTEyTDIwLjI5MDkgNC40MDYxM0wyNC4xNDQ4IDAuOTIwODY2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE0Ljc5OTcgMS4wNTM1OEwxOC4yOTAxIDQuOTAyODdMMTMuMjExNCA2LjAwMTAxTDE0Ljc5OTcgMS4wNTM1OFoiIGZpbGw9ImJsYWNrIi8+CjxsaW5lIHgxPSIzMC4zNDYzIiB5MT0iMy45MTI3NiIgeDI9IjUuMzQ2MjciIHkyPSIyNy45MTI4IiBzdHJva2U9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMS43MjExIDI5Ljc3OTZMMjIuMDI2NiAzMC4wMTcyQzIzLjMwNTYgMzEuMDEyIDI0Ljg3OTcgMzEuNTUyMSAyNi41IDMxLjU1MjFMMjUuMDYxMiAzMC4zMjk2QzIwLjcxNjIgMjYuNjM4IDIxLjQ2NTEgMTkuNzI3MyAyNi41IDE3LjA1MjFDMjQuOTI1NSAxNi43MzcyIDIzLjI5NDUgMTcuMTc5MSAyMi4wOTQ1IDE4LjI0NTlMMjEuMzYzOSAxOC44OTUyQzE4LjA1NDIgMjEuODM3MiAxOC4yMjU2IDI3LjA2MDkgMjEuNzIxMSAyOS43Nzk2WiIgZmlsbD0iYmxhY2siIHN0cm9rZT0iYmxhY2siLz4KPHBhdGggZD0iTTMyLjUgMjUuNTUyMUwzMi4xNjMyIDI0LjUxNTZIMzEuMDczNEwzMS45NTUxIDIzLjg3NUwzMS42MTgzIDIyLjgzODVMMzIuNSAyMy40NzkxTDMzLjM4MTcgMjIuODM4NUwzMy4wNDQ5IDIzLjg3NUwzMy45MjY2IDI0LjUxNTZIMzIuODM2OEwzMi41IDI1LjU1MjFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjkuNSAyOC41NTIxTDI5LjE2MzIgMjcuNTE1NkgyOC4wNzM0TDI4Ljk1NTEgMjYuODc1TDI4LjYxODMgMjUuODM4NUwyOS41IDI2LjQ3OTFMMzAuMzgxNyAyNS44Mzg1TDMwLjA0NDkgMjYuODc1TDMwLjkyNjYgMjcuNTE1NkgyOS44MzY4TDI5LjUgMjguNTUyMVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yOS41IDIyLjU1MjFMMjkuMTYzMiAyMS41MTU2SDI4LjA3MzRMMjguOTU1MSAyMC44NzVMMjguNjE4MyAxOS44Mzg1TDI5LjUgMjAuNDc5MUwzMC4zODE3IDE5LjgzODVMMzAuMDQ0OSAyMC44NzVMMzAuOTI2NiAyMS41MTU2SDI5LjgzNjhMMjkuNSAyMi41NTIxWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
    }
`;

// The '<ul>' elements with url links for different parts of the page. 
export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  & li {
    height: 100%;
    margin-right: 0.625rem;
  }
  & li:last-child {
    margin-right: 0;
  }
  & li:after {
    display: block;
  }
  & li:hover:after {
    transform: scale(1.2);
  }
`;

// Translation buttons for different languages.
export const LngBtns = styled.div`
.lngButton {
  display:flex;
}
.lngButton > button {
  font-family: ${(props) => props.theme.fonts.header}, sans-serif;
  font-weight: bold;
  background-color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].background_three};
  color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].text_color};
  text-shadow: ${(props) => props.visualMode ? `-1px -1px 0 ${props.theme.colors_dark.text_shadow}, 1px -1px 0 ${props.theme.colors_dark.text_shadow}, -1px 1px 0 ${props.theme.colors_dark.text_shadow}, 1px 1px 0 ${props.theme.colors_dark.text_shadow}` : "0"};
  height: 25px;
  width: 70px;
}
.lngButton > button:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme[props.visualMode ? "colors_dark" : "colors_light"].hover_one};
  }
.lngButton > button:disabled {
  opacity: 30%;
}
@media screen and (max-width: 390px) {
  width: 140px;
}
`
// The div containing the list.
export const NavListMain = styled(NavList)`
  min-width: 40%;
  justify-content: space-evenly;
  > li > a {
    color: ${(props)=>props.theme[props.visualMode ? "colors_dark" : "colors_light"].text_color};
    text-shadow: ${(props) => props.visualMode ? "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black" : "0"};
  }
  > li > a:hover {
    color: ${(props)=>props.theme[props.visualMode ? "colors_dark" : "colors_light"].nav_link_hover};
    text-shadow: none;
  }
  @media screen and (max-width: 665px) {
    display: none;
    height: 60px;
    padding: 0 0.3rem;
    align-items: center;
    justify-content: space-evenly;
    top: 60px;
    position: fixed;
    width: 100%;
    background-color: ${(props)=>props.theme[props.visualMode ? "colors_dark" : "colors_light"].hamburger_menu};
    z-index: 100;
  }
`;

export const NavItems = styled(NavLink)`
  font-family: ${(props) => props.theme.fonts.header}, sans-serif;
  /* color: ${(props)=>props.theme[props.visualMode? "colors_dark" : "colors_light"].text_color}; */
  background: brown;
  height: 99%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: none;
  border: none;
  font-weight: 400;
  text-decoration: none;
  transition: 200ms ease-in;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme[props.visualMode? "colors_dark" : "colors_light"].nav_link_hover};
    transform: scale(1.3);
  }

  @media screen and (max-width: 1380px), screen and (max-height: 540px) {
  &:hover {
    transform: none;
  }
  nav > h2 {
    margin: 0.5rem;
  }
  .ani {
    animation: none;
  }
}
`;

export const NavHamburgerMenu = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 665px) {
    display: block;
    /* Specific width and height use to match the original size of the svg. Stupid mistake to make the ratios uneven. */
    width: 24px;
    height: 24px;
    appearance: none;
    transition: 100ms;
    /* Yellow */
    /* filter: invert(93%) sepia(66%) saturate(1906%) hue-rotate(357deg) brightness(107%) contrast(104%); */
    /* Gray */
    /* filter: invert(76%) sepia(2%) saturate(24%) hue-rotate(329deg) brightness(99%) contrast(94%); */
    /* White */
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyNyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI3IiBoZWlnaHQ9IjYuNDI4NTciIHJ4PSIzLjIxNDI5IiBmaWxsPSJibGFjayIvPgo8cmVjdCB5PSIxMC4yODU3IiB3aWR0aD0iMjciIGhlaWdodD0iNi40Mjg1NyIgcng9IjMuMjE0MjkiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHk9IjIwLjU3MTQiIHdpZHRoPSIyNyIgaGVpZ2h0PSI2LjQyODU3IiByeD0iMy4yMTQyOSIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==");
    background-size: cover;
}
    background-repeat: no-repeat;
    /* show the menu when the input is checked */
    &:checked {
      transition: 100ms;
      transform: rotate(90deg);
      /* Changes the "checked" color depending on dark or light mode. Color choice is "yello" and "goldenrod". */
      filter: ${(props) => props.visualMode? "invert(69%) sepia(31%) saturate(1151%) hue-rotate(1deg) brightness(95%) contrast(83%);" : "invert(93%) sepia(66%) saturate(1906%) hue-rotate(357deg) brightness(107%) contrast(104%)"};
    }
    &:checked + ${NavListMain} {
      display: flex;
      z-index: 99;
      animation:hamburger-slide 100ms ease-in;
      @keyframes hamburger-slide {
        from {height: 0px;}
        to {height: 60px;}
      }
    }
`;