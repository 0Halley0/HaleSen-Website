declare module "react-router-hash-link" {
  import * as React from "react";
  import { HashLinkProps } from "react-router-hash-link";
  export const HashLink: React.ForwardRefExoticComponent<
    HashLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  export const NavHashLink: typeof HashLink;
}
