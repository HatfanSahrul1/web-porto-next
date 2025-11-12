declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        icon?: string;
        style?: React.CSSProperties;
        width?: string | number;
        height?: string | number;
      };
    }
  }
}

export {};