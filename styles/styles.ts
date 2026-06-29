export const buttonStyle =
  "text-sub flex hover:underline items-center gap-1 text-xs w-fit transition-colors";

export const iconSize = "h-3.5 w-3.5";

export const colorScheme = {
  button: {
    default: "text-sub",
    hover: {
      primary: "hover:text-blue-500 dark:hover:text-blue-400",
      success: "hover:text-green-500 dark:hover:text-green-400",
      secondary: "hover:text-zinc-600 dark:hover:text-zinc-100",
    },
  },

  background: {
    card: "bg-card",
    badge: "bg-bg-badge",
  },

  text: {
    primary: "text-sub",
    secondary: "text-dim",
    muted: "text-faint",
  },

  status: {
    finished: "bg-green-500",
    inProgress: "bg-yellow-500",
    archived: "bg-red-500",
  },

  events: {
    luma: "hover:text-purple-500 dark:hover:text-purple-400",
    meetup: "hover:text-red-500 dark:hover:text-red-500",
    eventbrite: "hover:text-orange-500 dark:hover:text-orange-400",
  },
};
