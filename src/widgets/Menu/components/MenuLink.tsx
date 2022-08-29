import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
};

const MenuLink: React.FC<Props> = ({ href: hrefIn, disabled = false, ...otherProps }) => {
  const domain = window.location.host.split(".").reverse()[0];
  const href = domain.indexOf("localhost") > -1 ? hrefIn?.replace("$$", "finance") : hrefIn?.replace("$$", domain);
  const isHttpLink = href?.startsWith("http");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = disabled ? "div" : isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  return <Tag {...props} {...otherProps} />;
};

export default MenuLink;
