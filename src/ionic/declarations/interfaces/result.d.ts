declare module "cordova-plugin-dfu-update" {
  export type Result =
    | {
        id: string;
        status: Exclude<Status, "progressChanged">;
      }
    | {
        id: string;
        status: Extract<Status, "progressChanged">;
        progress: Progress;
      };
}
