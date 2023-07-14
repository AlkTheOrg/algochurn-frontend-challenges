import { useMemo, useState } from 'react';
import { checkboxList } from './list';
import { Checkbox } from './Checkbox';

export const App = () => {
  const [items, setItems] = useState(checkboxList);
  const toggleCheckbox = (index: number) => {
    setItems([
      ...items.slice(0, index),
      {
        ...items[index],
        checked: !items[index].checked
      },
      ...items.slice(index + 1)
    ])
  };

  const allSelected = useMemo(() => items.every(item => item.checked), [items]);

  const toggleAllSelected = () => {
    if (allSelected) {
      setItems(items.map(item => ({ ...item, checked: false })));
    } else {
      setItems(items.map(item => ({ ...item, checked: true })));
    }
  };

  return (
  <div className="m-5 max-w-xl font-semibold rounded-md border-[1px] border-gray-200">
    <div className="bg-gray-200 rounded-t-md py-2 px-4 list-none select-none">
      <Checkbox
        id="select-all"
        label="Select All"
        checked={allSelected}
        onChange={toggleAllSelected}
      />
    </div>
    <ul className="px-4 py-3">
      {items.map(({ id, name, checked }, index) =>
        <Checkbox
          id={String(id)}
          key={id}
          label={name}
          checked={checked}
          onChange={() => toggleCheckbox(index)}
        />
      )}
    </ul>
  </div>
  )
}
