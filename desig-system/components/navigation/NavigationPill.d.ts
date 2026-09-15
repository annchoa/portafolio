import * as React from 'react';
/**
 * A single navigation link pill.
 */
export interface NavigationPillProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "default" | "active" | "hover";
}
export declare const NavigationPill: React.FC<NavigationPillProps>;
export default NavigationPill;
