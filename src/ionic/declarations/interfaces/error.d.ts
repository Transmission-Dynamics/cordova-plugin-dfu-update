declare module "cordova-plugin-dfu-update" {
  export interface Error {
    id: string;
    error: number;
    errorType: number;
    message: string;
  }
}
