import { Location } from "react-router";

interface InterfaceLocation extends Location {
    state: TypeState;
}

type TypeState = {
    referer?: {
        href?: string;
    };
};

export type { InterfaceLocation, TypeState };
