import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button'| 'submit';
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export type CarState = CarProps[] & { message?: string };

export interface FilterProps {
    manufacturer: string;
    year: number;
    limit: number;
    model: string;
    fuel: string;
}

export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps<T> {
    title: string;
    options: OptionProps[];
    setFilter: (selected: T) => void;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: (selected: string) => void;
}