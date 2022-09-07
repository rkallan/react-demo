/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="react-scripts" />
declare module "@rrkallan/ui-library";
declare module "@rrkallan/js-helpers";
declare module "@rrkallan/react-hookss";
declare module "html-to-react";

namespace React {
    interface HTMLAttributes<T> {
        variant?: string;
        state?: string;
    }
}
