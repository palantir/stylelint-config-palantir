// Modified concentric CSS ordering to better match `box-sizing: border-box`.
// @see https://github.com/brandon-rhodes/Concentric-CSS/blob/master/style.css

// Also includes "modern" CSS properties such as flexbox and transitions.
// Any unspecified properties must appear at the end in alphabetical order.

module.exports = [
  // Directions about where and how the box is placed
  "display",

  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "align-content",
  "align-items",
  "align-self",
  "justify-content",
  "order",

  "position",
  "top",
  "right",
  "bottom",
  "left",

  "columns",
  "column-gap",
  "column-fill",
  "column-rule",
  "column-span",
  "column-count",
  "column-width",

  "float",
  "clear",

  "transform",
  "transform-origin",

  // can the box be seen?
  "visibility",
  "opacity",
  "z-index",

  // Layers of the box model, from outside to inside
  "margin",
  "margin-top",
  "margin-right",
  "margin-bottom",
  "margin-left",

  "outline",

  "border",
  "border-top",
  "border-right",
  "border-bottom",
  "border-left",
  "border-width",
  "border-top-width",
  "border-right-width",
  "border-bottom-width",
  "border-left-width",
  "border-style",
  "border-top-style",
  "border-right-style",
  "border-bottom-style",
  "border-left-style",
  "border-color",
  "border-top-color",
  "border-right-color",
  "border-bottom-color",
  "border-left-color",
  "border-radius",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-bottom-left-radius",
  "border-bottom-right-radius",

  "box-shadow",
  "box-sizing",

  // Content dimensions and background and scrollbars
  "background",
  "background-color",
  "background-image",
  "background-repeat",
  "background-position",
  "background-size",
  "cursor",

  "width",
  "min-width",
  "max-width",
  "height",
  "min-height",
  "max-height",

  "overflow",

  // (Padding after dimensions because of `box-sizing: border-box`)
  "padding",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",

  // Special content types: lists, tables
  "list-style",
  "caption-side",
  "table-layout",
  "border-collapse",
  "border-spacing",
  "empty-cells",

  // Textual content
  "vertical-align",
  "text-align",
  "text-decoration",
  "text-indent",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-transform",

  "line-height",
  "word-spacing",
  "letter-spacing",
  "white-space",

  "color",

  "font",
  "font-family",
  "font-size",
  "font-weight",
  "font-style",
  "font-smoothing",

  "content",
  "quotes",

  // Transitions change previously defined properties
  "transition",
  "transition-property",
  "transition-duration",
  "transition-timing-function",
  "transition-delay"
]
