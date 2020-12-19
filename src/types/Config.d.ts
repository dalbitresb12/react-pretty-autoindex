export interface VisibilityOptions {
  use: boolean,
  tooltip: boolean,
  type: "raw" | "readable" | "both",
}

export interface Config {
  name: string,
  basePath: string,
  address: string,
  withCredentials: boolean,
  visibilityOptions: {
    size: VisibilityOptions,
    date: VisibilityOptions,
  },
}