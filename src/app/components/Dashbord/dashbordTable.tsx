"use client";
import type React from "react";
import {
	useReactTable,
	getCoreRowModel,
	flexRender,
	createColumnHelper,
} from "@tanstack/react-table";
import { Folder, FileText, MoreVertical } from "lucide-react"; // Google Drive風のアイコン
import { Button } from "@/components/ui/button";

interface FileData {
	id: string;
	name: string;
	size: number;
	createdAt: string;
	isFolder: boolean;
}

// サンプルデータ
const data: FileData[] = [
	{
		id: "1",
		name: "Documents",
		size: 0,
		createdAt: "2024-01-01",
		isFolder: true,
	},
	{
		id: "2",
		name: "file1.txt",
		size: 1024,
		createdAt: "2024-01-02",
		isFolder: false,
	},
	{
		id: "3",
		name: "file2.jpg",
		size: 2048,
		createdAt: "2024-01-03",
		isFolder: false,
	},
];

const columnHelper = createColumnHelper<FileData>();

// カラム定義
const columns = [
	columnHelper.accessor("name", {
		header: "ファイル名",
		cell: ({ row }) => (
			<div className="flex items-center">
				{/* フォルダかファイルかを判別してアイコンを表示 */}
				{row.original.isFolder ? (
					<Folder className="mr-2 text-blue-500" />
				) : (
					<FileText className="mr-2 text-gray-500" />
				)}
				<span className="truncate">{row.original.name}</span>
			</div>
		),
	}),
	columnHelper.accessor("size", {
		header: "サイズ",
		cell: ({ row }) =>
			row.original.isFolder
				? "-"
				: `${(row.original.size / 1024).toFixed(2)} KB`, // KB単位でサイズを表示
	}),
	columnHelper.accessor("createdAt", {
		header: "作成日",
	}),
	columnHelper.display({
		id: "actions",
		header: "",
		cell: () => (
			<Button className="text-gray-500 hover:text-black" variant="outline">
				<MoreVertical />
			</Button>
		), // 行ごとの操作ボタン（例: メニューアイコン）
	}),
];

const DashboardTable: React.FC = () => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="overflow-hidden border border-gray-200 rounded-lg">
			<table className="min-w-full table-auto">
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									className="px-6 py-3 text-left text-sm font-semibold text-gray-600 bg-gray-100"
								>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id} className="hover:bg-gray-50">
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id} className="px-6 py-4 text-sm text-gray-700">
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DashboardTable;
