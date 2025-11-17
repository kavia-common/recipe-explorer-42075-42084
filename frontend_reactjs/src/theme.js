//
// PUBLIC_INTERFACE
// Export theme tokens for the Ocean Professional theme.
// These can be consumed by components or used to keep CSS variables in sync.
//
export const theme = {
  name: "Ocean Professional",
  description: "Blue & amber accents",
  colors: {
    primary: "#2563EB",
    secondary: "#F59E0B",
    success: "#F59E0B",
    error: "#EF4444",
    background: "#f9fafb",
    surface: "#ffffff",
    text: "#111827",
  },
  gradient: "from-blue-500/10 to-gray-50",
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
  },
};

// PUBLIC_INTERFACE
export function applyThemeToDocument(doc = document) {
  /**
   * Apply theme values to CSS variables on :root for runtime overrides if needed.
   */
  const root = doc.documentElement;
  root.style.setProperty("--color-primary", theme.colors.primary);
  root.style.setProperty("--color-secondary", theme.colors.secondary);
  root.style.setProperty("--color-success", theme.colors.success);
  root.style.setProperty("--color-error", theme.colors.error);
  root.style.setProperty("--color-background", theme.colors.background);
  root.style.setProperty("--color-surface", theme.colors.surface);
  root.style.setProperty("--color-text", theme.colors.text);
}
