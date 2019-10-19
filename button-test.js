import React from "react";

import { XButton } from "../components2/button/button";

export default function Testing() {

    return (
        <div className="error">
            <h1>Master Testing page</h1>

            <h2>Buttons</h2>
            <XButton></XButton>
            <XButton>Testing Props</XButton>
            <XButton className="btn-sm">Testing Props</XButton>
            <XButton className="btn-sm" status="success">Testing Props</XButton>

        </div>
    );
}
