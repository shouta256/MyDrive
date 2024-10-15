"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import type React from "react";
import { useState } from "react";
import { NewFolderPopover } from "./newFolderPopover";

interface TableControlsProps {
	onCreateFolder: () => void; // フォルダ作成時のイベント
	onSort: (sortBy: string) => void; // 並び替えイベント
	onSearch: (query: string) => void; // 検索時のイベント
}

export default function TableControls({
	onCreateFolder,
	onSort,
	onSearch,
}: TableControlsProps) {
	const [searchQuery, setSearchQuery] = useState("");
	const [folders, setFolders] = useState<string[]>([]);
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
		onSearch(e.target.value); // 検索フィールドに入力されるたびに検索イベントをトリガー
	};

	const handleCreateFolder = (folderName: string) => {
		setFolders((prevFolders) => [...prevFolders, folderName]);
		alert(`フォルダ「${folderName}」が作成されました`);
	};

	return (
		<div className="flex justify-end items-center mb-4  px-6 rounded-lg">
			{/* 検索フィールド */}
			<input
				type="text"
				value={searchQuery}
				onChange={handleSearchChange}
				placeholder="検索..."
				className="border w-[300px] border-gray-300 rounded-md px-4 py-1 mr-10"
			/>

			<div className="space-x-4">
				<Button
					className="px-4 py-2 mr-8 rounded-md font-bold"
					variant="outline"
					onClick={() => onSort("name")}
				>
					並び替え
				</Button>
			</div>

			<Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
				<PopoverTrigger asChild>
					<Button variant="primary">フォルダ作成</Button>
				</PopoverTrigger>
				<NewFolderPopover />
			</Popover>
		</div>
	);
}
