declare module "cordova-plugin-dfu-update" {
  export type Status =
    | "deviceConnected"
    | "dfuProcessStarting"
    | "dfuProcessStarted"
    | "progressChanged"
    | "deviceDisconnecting"
    | "deviceDisconnected"
    | "dfuCompleted";
}
