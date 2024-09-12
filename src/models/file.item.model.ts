export interface FileItem {
  id: string;
  name: string;
  creation: Date;
  owners: FileOwner[];
  type: FileType;
  parentId?: string;
}

export interface FileOwner {
  name: string;
  avatarUrl: string;
}

export enum FileType {
  NOT_DEFINED,
  FOLDER,
  FILE
}
