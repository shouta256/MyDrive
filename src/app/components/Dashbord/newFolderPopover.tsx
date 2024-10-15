"use client";

import { Button } from "@/components/ui/button";
import { PopoverContent } from "@/components/ui/popover";
import { FolderPlus } from "lucide-react";
import { useState } from "react";

export const NewFolderPopover = () => {
	const [inputValue, setInputValue] = useState(""); // ローカルでフォルダ名を管理

	const handleCreate = () => {};

	return (
		<PopoverContent
			className="w-56 p-4 shadow-lg"
			align="end"
			side="bottom"
			alignOffset={-5}
		>
			<div className="flex flex-col space-y-3">
				<input
					type="text"
					placeholder="フォルダ名を入力"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className="border border-gray-300 rounded-md px-3 py-2"
				/>
				<Button variant="primary" onClick={handleCreate}>
					<FolderPlus size={16} className="mr-2" />
					フォルダ作成
				</Button>
			</div>
		</PopoverContent>
	);
};
