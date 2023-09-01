import Table from "./Table";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import useSort from "../hooks/useSort";

function SortableTable(props) {
  const { config, data } = props;

  const { sortOrder, sortBy, sortedData, setSortLabel } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortLabel(column.label)}
        >
          <div className="flex items-center">
            {" "}
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}{" "}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoChevronUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoChevronDown />
      </div>
    );
  }
}

export default SortableTable;
