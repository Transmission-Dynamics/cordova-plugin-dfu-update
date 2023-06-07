/// <reference path="./interfaces/update-options.d.ts" />

declare module "@Transmission-Dynamics/cordova-plugin-dfu-update" {
  export default class DfuUpdate {
    static updateFirmware(
      resultCallback: (result: Result) => void,
      errorCallback: (error: Error) => void,
      options: UpdateOptions
    );
  }
}
