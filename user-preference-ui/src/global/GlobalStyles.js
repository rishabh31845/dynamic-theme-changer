import "antd/dist/antd.css";
import { createGlobalStyle } from "styled-components";
import { PRIMARY } from "theme";

export default createGlobalStyle`

    body {
        min-height: 100%
    }

    #root {
        min-height: 100%;
        height: 100%;
    }

    .ant-btn-icon-only {
        width: 24px;
        height: 24px;
        font-size: 12px;
    }

    .ant-btn-primary  {
        background: ${PRIMARY};
        border-color: ${PRIMARY};
    }

    .ant-btn-primary:hover, .ant-btn-primary:focus {
        background: ${PRIMARY};
        border-color: ${PRIMARY};
    }

    .ant-btn:hover, .ant-btn:focus, .ant-btn:active {
        background: ${PRIMARY};
        border-color: ${PRIMARY};
    }
`;
