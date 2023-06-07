declare module "@Transmission-Dynamics/cordova-plugin-dfu-update" {
  export interface UpdateOptions {
    deviceId: string;
    fileUrl: string;
    packetReceiptNotificationsValue?: number;
  }
}
