declare module "@Transmission-Dynamics/cordova-plugin-dfu-update" {
  export interface Progress {
    percent: number;
    speed: number;
    avgSpeed: number;
    currentPart: number;
    partsTotal: number;
  }
}
