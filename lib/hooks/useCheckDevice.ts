import { useEffect, useState } from 'react';

/**
 * Type definition for device types
 * @typedef {'mobile' | 'tablet' | 'desktop'} DeviceType
 */
type DeviceType = 'mobile' | 'tablet' | 'desktop';

/**
 * A custom hook that detects the current device type based on window width.
 * 
 * @returns {DeviceType} The current device type ('mobile', 'tablet', or 'desktop')
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const deviceType = useCheckDevice();
 *   
 *   return (
 *     <div>
 *       {deviceType === 'mobile' && <MobileView />}
 *       {deviceType === 'tablet' && <TabletView />}
 *       {deviceType === 'desktop' && <DesktopView />}
 *     </div>
 *   );
 * }
 * ```
 * 
 * @remarks
 * Breakpoints:
 * - Mobile: < 768px
 * - Tablet: 768px - 1023px
 * - Desktop: ≥ 1024px
 * 
 * The hook automatically updates when the window is resized.
 */
export const useCheckDevice = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      
      if (width <= 768) {
        setDeviceType('mobile');
      } else if (width > 768 && width <= 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    // Initial check
    checkDevice();

    // Add event listener for window resize
    window.addEventListener('resize', checkDevice);

    // Cleanup
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return deviceType;
}; 