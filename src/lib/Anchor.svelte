<script>
    /**
     * @typedef {Object} Props
     * @property {string} [anchorLink] - The URL for the anchor.
     * @property {string} [anchorText] - The visible text for the anchor.
     * @property {string} [anchorLabel] - The aria-label for accessibility.
     * @property {string} [backgroundColor] - The background color for the anchor.
     * @property {string} [padding] - The background color for the anchor.
     */
  
    // Using `export let` to declare props with default values
    export let anchorLink = '#';           // Default link
    export let anchorText = 'Button text'; // Default text
    export let anchorLabel = 'Enter Aria-Label'; // Default aria-label
    export let backgroundColor = 'white'; // Default background color
    export let padding = '.75rem'; // Default background color
  </script>
  
  <!-- Apply the dynamic style and props -->
  <a href={anchorLink} aria-label={anchorLabel} style="--anchor-bg-color: {backgroundColor}; --anchor-padding: {padding}">
    {anchorText}
  </a>

  <style>
    a {
      position: relative;
      z-index: 1;
      border: 1px solid var(--blue);
      padding: var(--anchor-padding);
      background-color: var(--anchor-bg-color);
      border-radius: 10px;
      color: var(--blue);
      font-weight: 700;
      text-decoration: none;
    }
  
    a:hover {
      right: 1px;
      top: 1px;
    }
  
    a::after {
      content: "";
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid var(--blue);
      background-color: var(--anchor-bg-color);
      border-radius: 10px;
      color: var(--blue);
      right: 2px;
      top: 2px;
    }
  
    a:hover::after {
      right: 1px;
      top: 1px;
    }
  </style>
  
  