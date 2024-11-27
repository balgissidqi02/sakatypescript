import React from 'react';

type ColumnWithField = {
    title: string;
    field: string;
};

type ColumnWithRender = {
    title: string;
    render: (rowData: Record<string, any>) => React.ReactNode;
};

export type ColumnDefs = ColumnWithField | ColumnWithRender;

type TableProps = {
    columnDefs: ColumnDefs[];
    data: Record<string, any>[];
};

// Fungsi pembantu untuk mengecek apakah kolom memiliki `field`
const isColumnWithField = (column: ColumnDefs): column is ColumnWithField => {
    return 'field' in column;
};

const Table: React.FC<TableProps> = ({ columnDefs, data }) => {
    return (
        <table className="min-w-full divide-y overflow-hidden rounded-lg divide-gray-800 shadow-lg">
            <thead className="bg-green-200">
                <tr>
                    {columnDefs.map((column, index) => (
                        <th
                            key={index}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            {column.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((rowData, rowIndex) => (
                    <tr key={rowIndex} className="cursor-pointer hover:bg-gray-100">
                        {columnDefs.map((column, colIndex) => (
                            <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                                {isColumnWithField(column)
                                    ? rowData[column.field] ?? 'N/A'
                                    : column.render
                                    ? column.render(rowData)
                                    : null}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
