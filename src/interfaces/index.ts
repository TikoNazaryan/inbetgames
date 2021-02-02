export interface IItems {
  items: string[],
  visibleItems: number[],
  activeItem: number,
  setActiveItem: (value: number) => void,
  setVisibleItems: (value: number[]) => void,
}

export interface IMoveButton {
  left?: boolean,
  items: string[],
  activeItem: number,
  setActiveItem: (value: number) => void
}

export interface IAdd {
  setItems: any,
  setActiveItem:(value: number) => void
}