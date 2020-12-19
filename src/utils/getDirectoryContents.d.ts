import { FileMetadata } from '../types';

declare function getDirectoryContents(path: string): Promise<FileMetadata[]>;

export = getDirectoryContents;