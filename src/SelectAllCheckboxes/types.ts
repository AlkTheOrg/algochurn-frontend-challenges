type ListItem = {
  id: number,
  name: string
}

type CheckboxListItem = ListItem & { checked: boolean };

export type ListItems = ListItem[];
export type CheckboxListItems = CheckboxListItem[];
