export interface MenuSidebarType {
  id: number
  title: string;
  path: string;
  children?: MenuSidebarType[];
}