export interface VisibilityOptions {
  use: boolean,
  tooltip: boolean,
  type: "raw" | "readable" | "both",
}

export interface SizeDate {
  size: VisibilityOptions,
  date: VisibilityOptions,
}

export interface Config {
  name: string,
  basePath: string,
  address: string,
  withCredentials: boolean,
  visibilityOptions: SizeDate,
}