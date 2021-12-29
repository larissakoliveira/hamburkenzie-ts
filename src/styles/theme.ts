import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme ({
    colors: {
        green: {
            100: "#219653",
            primary50: "#27AE60",
            success: "rgba(22, 136, 33, 1)",
          },
        gray: {
            600: "#333333",
            300: "#828282",
            200: "#999999",
            100: "#E0E0E0",  
            0: "#F5F5F5",
        },
        red: {
            secondary: "#EB5757",
            negative: "#E60000",
        },
        blue: {
            information: "#155BCB",
        },
        yellow: {
            warning:"#FFCD07",
        }
    },
      fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "22px",
        "2xl": "26px"
      },
      fontWeight:{
        'darker': '700',
        'medium': '600',
        'lighter': '400'
      },
      styles: {
        global: {
          body: {
            fontFamily: "Inter",
          },
          "&::-webkit-scrollbar": {
            width: "17px",
          },
  
          "&::-webkit-scrollbar-track": {
            background: "white",
          },
  
          "&::-webkit-scrollbar-thumb": {
            bg: "green.primary50",
            borderRadius: "8px"
          },
        },
      },
    })
