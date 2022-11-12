import {PeopleSearchType} from "./people";

export type PeopleSearchContextType = {
    selectedItem: PeopleSearchType | null;
    setSelectedItem: (item: PeopleSearchType) => void;
}