import { useState } from "react";

interface BLEDevice {
  id: string;
  name?: string;
  rssi?: number;
  lastSeen: Date;
  isActive: boolean;
  connectable?: boolean;
}

export default function Scanner() {
  const [isScanning, setIsScanning] = useState(false);

  const getNearbyDevices = async () => {
    try {
      setIsScanning(true);
      // @ts-ignore
      const ble = navigator.bluetooth;
      if (!ble) {
        throw new Error("Web Bluetooth API is not supported in this browser.");
      }

      const selectedDevice = await ble.requestDevice({
        filters: [
          { services: ["0000ffe1-0000-1000-8000-00805f9b34fb"] }, // Full UUID for your custom service
          // Or combine with Eddystone:
          { services: ["0000feaa-0000-1000-8000-00805f9b34fb"] },
        ],
      });
      console.log(selectedDevice, selectedDevice.name);
    } catch (error) {
      console.error("Error during scanning:", error);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          BLE Device Scanner
        </h1>
        <p className="text-gray-600 mb-6">
          Discover and monitor all Bluetooth Low Energy devices in your
          vicinity. No pairing required - just scan and view!
        </p>

        {isScanning && (
          <div className="mt-4 text-sm text-gray-500">
            <p>
              🔄 Scanning every 2 seconds | 📱 Showing all discoverable BLE
              devices
            </p>
          </div>
        )}

        <button onClick={getNearbyDevices}>
          {isScanning ? "Stop Scanning" : "Start Scanning"}
        </button>
      </div>
    </div>
  );
}
