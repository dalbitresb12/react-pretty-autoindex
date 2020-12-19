export interface FileMetadata {
  name: string,
  type: "file" | "directory" | "other",
  mtime: string,
  size?: number
}
