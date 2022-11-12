import {PeopleType} from "./people";

export type PeopleContextType = {
    selectedItem: PeopleType | null;
    setSelectedItem: (item: PeopleType) => void;
}