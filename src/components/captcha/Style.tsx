import styled from "styled-components";
export const CaptchaWrapper = styled.div`
    .cap {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 255px;
        background-color: #eee;
        border-radius: 6px;
        padding: 10px;
        box-sizing: border-box;
    }
    .cap-row {
        display: flex;
        align-items: stretch;
        margin: 0 0 10px 0;
    }
    .cap-column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 0 0 10px;
    }
    .cap-canvas {
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 4px;
    }
    .cap-button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        background: #fff;
        color: inherit;
        border: none;
        padding: 0;
        width: 25px;
        height: 20px;
        box-sizing: border-box;
        border-radius: 4px;
    }
    .cap-button svg {
        width: 1em;
        height: 1em;
        fill: currentColor;
    }
    .cap-input {
        border: none;
        padding: 0 11px;
        height: 32px;
        border-radius: 6px;
        font-size: 14px;
        color: #46474a;
    }
    .cap-input-invalid {
        border: 1px solid #f44336 !important;
    }
    .cap-label-invalid {
        color: #f44336;
    }
`
