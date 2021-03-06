export const layout: any = {
  mobileBreakpoint: (width: string) =>
    `@media screen and (max-width: ${width || "480px"})`,
  header: {
    pc_height: "100px",
    mobile_height: "60px",
  },
  main: {
    max_width: "1200px",
  },
  footer: {
    pc_height: "150px",
    mobile_height: "30px",
  },
};

export const defaultBreakpoint: string = layout.mobileBreakpoint("480px");

const config: any = {
  layout,
  defaultBreakpoint,
};

export default config;
