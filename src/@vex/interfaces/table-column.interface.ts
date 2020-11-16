export interface TableColumn<T> {
  label: string;
  property: keyof T | string;
  type: 'text' | 'image' | 'badge' | 'progress' | 'checkbox' | 'button' | 'email' | 'phone' | 'contact' | 'state' | 'clientName' | 'dayAlert'  ;
  visible?: boolean;
  cssClasses?: string[];
}
