import { FileMetadata } from '../types';

export interface UseAutoindexReturnType {
  response: FileMetadata[],
  loading: boolean,
  error: unknown
}

declare function useAutoindex(path: string): UseAutoindexReturnType;

export = useAutoindex;