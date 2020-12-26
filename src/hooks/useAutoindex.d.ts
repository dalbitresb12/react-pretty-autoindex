import { FileMetadata } from '../types';

export interface UseAutoindexReturnType {
  data: FileMetadata[],
  loading: boolean,
  error: unknown,
  validating: boolean,
}

declare function useAutoindex(path: string): UseAutoindexReturnType;

export = useAutoindex;