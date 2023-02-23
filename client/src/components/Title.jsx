import { Typography } from "@mui/material";
import React from "react";

const Title = ({ sx = {}, variant = "h6", children, ...other }) => {
  const _variant =
    typeof variant !== "object" ? variant : variant === "h7" ? "h6" : "h6";

  const _component =
    typeof variant !== "object"
      ? variant
      : variant.xl ||
        variant.lg ||
        variant.md ||
        variant.sm ||
        variant.xs ||
        "h6";

  const _variantStyles =
    typeof variant === "object"
      ? {
          xs: variant.xs,
          sm: variant.sm || variant.xs,
          md: variant.md || variant.sm || variant.xs,
          lg: variant.lg || variant.md || variant.sm || variant.xs,
          xl:
            variant.xl || variant.lg || variant.md || variant.sm || variant.xs,
        }
      : variant;

  return (
    <Typography
      variant={_variant}
      sx={{
        color: "text.title",
        typography: typeof _variantStyles === "object" && _variantStyles,
        fontWeight: `${sx.fontWeight || 600}!important`,
        ...sx,
      }}
      component={_component}
      {...other}
    >
      {children}
    </Typography>
  );
};

export default Title;
