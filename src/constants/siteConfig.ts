export const siteHeader = {
  name: "Nexus App",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Service",
      link: "/service",
    },
  ],
  buttons: {
    signIn: "/sign-in",
    signUp: "/sign-up",
  },
}

export const SERVER_URL = import.meta.env.VITE_PUBLIC_SERVER_BASE_URL;