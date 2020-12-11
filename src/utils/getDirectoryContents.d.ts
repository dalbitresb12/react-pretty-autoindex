interface FileMetadata {
  name: string,
  type: "file" | "directory",
  mtime: string,
  size?: number
}

declare function getDirectoryContents(path: string): Promise<FileMetadata[]>;

export = getDirectoryContents;