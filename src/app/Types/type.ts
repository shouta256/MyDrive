interface FileData {
	id: string;
	name: string;
	size: number; // バイト単位のファイルサイズ
	createdAt: string; // 作成日
}

export const data: FileData[] = [
	{ id: "1", name: "file1.txt", size: 1024, createdAt: "2024-01-01" },
	{ id: "2", name: "file2.jpg", size: 2048, createdAt: "2024-01-02" },
	{ id: "3", name: "file3.pdf", size: 3072, createdAt: "2024-01-03" },
];

export interface User {
	id: string;
	name: string;
	iconImage: string;
	createdAt: Date;
	updatedAt: Date;
}
