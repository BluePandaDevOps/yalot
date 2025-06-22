// useSidebarControl.ts
import { useEffect } from 'react';
import { useSidebarContext } from './SidebarContext';

export const useSidebarControl = (shouldShow: boolean) => {
  const { setShowSidebar } = useSidebarContext();

  useEffect(() => {
    setShowSidebar(shouldShow);
  }, [shouldShow, setShowSidebar]);
};
